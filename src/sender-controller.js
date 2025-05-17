import { WebSocketServer } from 'ws'
import { spawn } from 'child_process'

// load config
import config from './config.json' with { type: 'json' }

// set env variables
const WS_SERVER_IP = process.env.WS_SERVER_IP || config.WS_SERVER_IP
const WS_SERVER_PORT = process.env.WS_SERVER_PORT || config.WS_SERVER_PORT

const wss = new WebSocketServer({ host: WS_SERVER_IP, port: WS_SERVER_PORT })


wss.on('connection', (ws) => {

  let currentExec = null

  ws.on('message', (data) => {
    const msg = JSON.parse(data.toString())
    if (msg.action === 'start') {
      
      currentExec = msg.exec

      const sender = spawn('node', [`src/sender-${msg.protocol}.js`, `--exec=${msg.exec}`])

      sender.stdout.on('data', (data) => {
        const log = data.toString()
        process.stdout.write(`[SENDER-${msg.exec}] ${log}`)
        ws.send(JSON.stringify({ exec: msg.exec, output: log }))
        
        if (log.includes('SENDER FINISHED')) {
          ws.send(JSON.stringify({ exec: msg.exec, status: 'SENDER FINISHED' }))
        }
      })
      
      sender.stderr.on('data', (data) => {
        ws.send(JSON.stringify({ exec: msg.exec, output: `[ERROR] ${data}`}))
      })
    }
  })

  ws.on('error', (err) => {
    console.error(`[WEBSOCKET ERROR] ${err.message}`)
    if (currentExec) {
      ws.send(JSON.stringify({ exec: currentExec, status: 'SENDER ERROR', error: err.message }))
    }
  })

  ws.on('close', () => {
    console.log('[SENDER SERVER] WebSocket connection closed...')
    console.log('[SENDER SERVER] All messages were sent (apparently!)...')
  })
})

console.log(`[SENDER SERVER] => WEBSOCKET server running at ${WS_SERVER_PORT}`)