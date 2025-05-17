import { WebSocket } from 'ws'
import { spawn } from 'child_process'

// load config
import config from './config.json' with { type: 'json' }

// set env variables
const TESTING_PROTOCOL = process.env.TESTING_PROTOCOL || config.TESTING_PROTOCOL
const WS_SERVER_IP = process.env.WS_SERVER_IP || config.WS_SERVER_IP
const WS_SERVER_PORT = process.env.WS_SERVER_PORT || config.WS_SERVER_PORT
const TOTAL_OF_EXPERIMENTS = process.env.TOTAL_OF_EXPERIMENTS || config.TOTAL_OF_EXPERIMENTS
const DELAY_BETWEEN_EXPERIMENTS_MS = process.env.DELAY_BETWEEN_EXPERIMENTS_MS || config.DELAY_BETWEEN_EXPERIMENTS_MS

// ws data
const WS_ADDRESS = `ws://${WS_SERVER_IP}:${WS_SERVER_PORT}`

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function executeExperiment(ws, number) {
  console.log(`[ORCHESTRATOR] => starting experiment number ${number} of ${TOTAL_OF_EXPERIMENTS}`)

  return new Promise((resolve) => {
    let senderHasEnded = false;
    let receiverHasEnded = false;
    const receiver = spawn('node', [`src/receiver-${TESTING_PROTOCOL}.js`, `--exec=${number}`])
    
    ws.send(JSON.stringify({ action: 'start', exec: number, protocol: TESTING_PROTOCOL}))

    // websocket message handler
    function messageHandler(data) {
      const msg = JSON.parse(data.toString())
      if (msg.exec !== number) return
      
      if (msg.output) {
        process.stdout.write(`[SENDER ${number}] ${msg.output}`)
      }
      
      if (msg.status === 'SENDER FINISHED') {
        senderHasEnded = true
        receiver.stdin.write('STOP\n')
        checkCompletion()
      }
    }

    function checkCompletion() {
      if (senderHasEnded && receiverHasEnded) {
        ws.off('message', messageHandler)
        resolve()
      }
    }

    ws.on('message', messageHandler)

    receiver.stdout.on('data', (data) => {
      process.stdout.write(`[RECEIVER ${number}] ${data}`)
      if (data.toString().includes('RECEIVER FINISHED')) {
        receiverHasEnded = true
        checkCompletion()
      }
    });

    receiver.stderr.on('data', (data) => {
      process.stderr.write(`[RECEIVER ${number} ERROR] ${data}`)
      ws.off('message', messageHandler)
      resolve()
    })
  })
}  
  

async function connectWebSocket(maxAttempts = 5) {
  let attempt = 1
  
  while (attempt <= maxAttempts) {
    try {
      return await new Promise((resolve, reject) => {
        const ws = new WebSocket(WS_ADDRESS)
        
        ws.on('open', () => {
          console.log('[ORCHESTRATOR] WebSocket connected')
          resolve(ws)
        })
        
        ws.on('error', (err) => {
          console.error(`[ORCHESTRATOR] WebSocket error (attempt ${attempt}): ${err.message}`)
          reject(err)
        })
      })
    } catch (err) {
      if (attempt >= maxAttempts) {
        console.error(`[ORCHESTRATOR] Failed after ${maxAttempts} attempts. Keeping alive...`)
        return null
      }
      
      attempt++
      await delay(3000)
    }
  }
}


// ---main function
async function main() {
  let ws = null
  
  while (!ws) {
    console.log(`[ORCHESTRATOR] Connecting to WebSocket at ${WS_ADDRESS}`)
    ws = await connectWebSocket()
    
    if (!ws) {
      console.log('[ORCHESTRATOR] Retrying in 3 seconds...')
      await delay(3000)
    }
  }
  
  try {
    // execute all experiments
    for (let i = 1; i <= TOTAL_OF_EXPERIMENTS; i++) {
      await executeExperiment(ws, i)
      
      if (i < TOTAL_OF_EXPERIMENTS) {
        console.log(`[ORCHESTRATOR] => Waiting ${DELAY_BETWEEN_EXPERIMENTS_MS / 1000} seconds...\n`)
        await delay(DELAY_BETWEEN_EXPERIMENTS_MS)
      }
    }
    
    console.log('All experiments were executed.')
  }
  finally {
    if (ws?.readyState !== WebSocket.CLOSED) {
      ws.close()
      console.log('[ORCHESTRATOR] WebSocket connection closed')
    }
  }
}

// ---start main
main().catch((err) => {
  console.error(`[ORCHESTRATOR] Fatal error: ${err.message}`)
  console.log('[ORCHESTRATOR] Keeping container alive. Retrying in 3 seconds...')
  setTimeout(() => main(), 3000)
})