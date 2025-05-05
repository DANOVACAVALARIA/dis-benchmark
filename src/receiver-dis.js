import dgram from 'dgram'
import fs from 'fs'

import { decodeESPDU } from './lib/decodeESPDU.js'
import { saveCsvFile } from './lib/saveCsvFile.js'


// load config
import config from './config.json' with { type: 'json' }

// getting execution number
const execArg = process.argv.find(arg => arg.startsWith('--exec='))
const execNum = execArg ? parseInt(execArg.split('=')[1]) : 0

// server instance
const server = dgram.createSocket('udp4')
let msgCount = 0

// metrics (DIS)
const metricsFile = fs.createWriteStream(`${config.DIS_RECEIVER_METRICS_DIR}/dis-receiver-metrics-${execNum}.csv`)
metricsFile.write('Msg_Received,Received_Time,Decoding_Time\n')
let metrics = []

// message data (DIS)
const messagesFile = fs.createWriteStream(`${config.DIS_MESSAGES_DIR}/dis-received-msg-${execNum}.csv`)
messagesFile.write('Force,ID,Kind,Domain,Country,Category,Timestamp,Location_X,Location_Y,Location_Z\n')
let messages = []

// server functions
server.on('listening', () => {
  console.log(`[DIS-RECEIVER] => server listening at ${config.UDP_RECEIVER_IP}:${config.UDP_PORT}...`)
})

server.on('message', async (msg, rinfo) => {
  const pduData = await decodeESPDU(msg)
  
  msgCount++
  
  metrics.push(`${msgCount},${pduData.receivedTime},${pduData.decodingTime.toFixed(4)}`)
  
  // show request
  //console.log(`[DIS-RECEIVER]: message received from ${rinfo.address}:${rinfo.port} with ${msg.length} bytes. Decoding Time: ${pduData.decodingTime}. Messages received so far: ${msgCount}.`)

  // save message
  messages.push([
     pduData.decodedPdu.forceId,
     pduData.decodedPdu.entityID.entity,
     pduData.decodedPdu.entityType.entityKind,
     pduData.decodedPdu.entityType.domain,
     pduData.decodedPdu.entityType.country,
     pduData.decodedPdu.entityType.category,
     pduData.decodedPdu.timestamp,
     pduData.decodedPdu.entityLocation.x,
     pduData.decodedPdu.entityLocation.y,
     pduData.decodedPdu.entityLocation.z
  ])

  // send response

})

// ---stop application after all messages were sent
process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
  if(data.trim() === 'STOP') {
    console.log(`[DIS-RECEIVER] => received STOP commmand from experiment ${execNum}, stopping server...`)
    stopServer()
  }
})

// ---save metrics and messages
const saveMetrics = setInterval(async () => {
  if (await saveCsvFile(metricsFile, metrics)
    && await saveCsvFile(messagesFile, messages)
  ) {
    metrics = []
    messages = []
  }
}, config.APPLICATION_SAVING_INTERVAL_MS)

// ---stop server
const stopServer = async () => {
  clearInterval(saveMetrics)
  setTimeout(async () => {
    if (await saveCsvFile(metricsFile, metrics)
      && await saveCsvFile(messagesFile, messages)
    ) {
      metrics = []
      messages = []
      metricsFile.end()
      messagesFile.end()
      server.close(() => {
        console.log('RECEIVER FINISHED')
        process.exit(0)
      })
    }
  }, config.TERMINATION_CHECK_INTERVAL_MS)  
}


// ---start server
server.bind(config.UDP_PORT, config.UDP_RECEIVER_IP)