import { WebSocket } from 'ws'
import { spawn } from 'child_process'

// load config
import config from './config.json' with { type: 'json' }


//const PROTOCOL = "dis"
const PROTOCOL = "proto"

const WS_ADDRESS = `ws://${config.WS_SERVER_IP}:${config.WS_SERVER_PORT}`
const ws = new WebSocket(WS_ADDRESS)

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const executeExperiment = async (ws, number) => {
  console.log(`[ORCHESTRATOR] => starting experiment number ${number} of ${config.TOTAL_OF_EXPERIMENTS}`)

  return new Promise((resolve) => {
    let senderHasEnded = false
    let receiverHasEnded = false

    const receiver = spawn('node', [`src/receiver-${PROTOCOL}.js`, `--exec=${number}`])

    if(ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ action: 'start', exec: number, protocol: PROTOCOL}))
    } else {
      console.error(`[ORCHESTRATOR] WebSocket not open for experiment ${number}`)
      receiver.kill()
      resolve()
    }
   
    const messageHandler = (data) => {
      const msg = JSON.parse(data.toString())
      if (msg.exec === number) { 
        if (msg.status === 'SENDER FINISHED') {
          senderHasEnded = true
          receiver.stdin.write('STOP\n')
          if (senderHasEnded && receiverHasEnded) {
            ws.off('message', messageHandler)
            resolve()          
          }
        }

        if (msg.output) {
          process.stdout.write(`[SENDER ${number}] ${msg.output}`)
        }
      }
    }

    // Adicionar o handler específico
    ws.on('message', messageHandler)

    receiver.stdout.on('data', (data) => {
      process.stdout.write(`[RECEIVER ${number}] ${data}`)
      if (data.toString().includes('RECEIVER FINISHED')) {
        receiverHasEnded = true
        if (senderHasEnded && receiverHasEnded) {
          // Remover o handler quando o experimento terminar
          ws.off('message', messageHandler)
          resolve()
        }
      }
    })

    receiver.stderr.on('data', (data) => {
      process.stderr.write(`[RECEIVER ${number} ERROR] ${data}`)
      // Também remover o handler em caso de erro
      ws.off('message', messageHandler)
      resolve()
    })
  })
}

const main = async () => {
  console.log(`[ORCHESTRATOR] Connecting to WebSocket at ${WS_ADDRESS}`)
  await new Promise((resolve, reject) => {
    ws.on('open', () => {
      console.log('[ORCHESTRATOR] WebSocket connected')
      resolve()
    })
    ws.on('error', (err) => {
      console.error(`[WEBSOCKET ERROR] Failed to connect: ${err.message}`)
      reject(err)
    })
  })

  try {
    for (let i = 1; i <= config.TOTAL_OF_EXPERIMENTS; i++) {
      await executeExperiment(ws, i) 
      if (i < config.TOTAL_OF_EXPERIMENTS) {
        console.log(`[ORCHESTRATOR] => Waiting ${config.DELAY_BETWEEN_EXPERIMENTS_MS / 1000} seconds...\n`)
        await delay(config.DELAY_BETWEEN_EXPERIMENTS_MS)
      }
    }
    console.log(`All experiments were executed.`)
  } finally {
    ws.close()
    console.log('[ORCHESTRATOR] WebSocket connection closed')
  }
}

main().catch((err) => {
  console.error(`[ORCHESTRATOR] Fatal error: ${err.message}`)
})