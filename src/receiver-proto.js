import dgram from 'dgram'
import fs from 'fs'

import { decodeProtoESPDU } from './lib/decodeProtoESPDU.js'
import { saveCsvFile } from './lib/saveCsvFile.js'


// load config
import config from './config.json' with { type: 'json' }

// set env variables
const PROTO_RECEIVER_METRICS_DIR = process.env.PROTO_RECEIVER_METRICS_DIR || config.PROTO_RECEIVER_METRICS_DIR
const PROTO_MESSAGES_DIR = process.env.PROTO_MESSAGES_DIR || config.PROTO_MESSAGES_DIR
const UDP_RECEIVER_IP = process.env.UDP_RECEIVER_IP || config.UDP_RECEIVER_IP
const UDP_PORT = process.env.UDP_PORT || config.UDP_PORT
const APPLICATION_SAVING_INTERVAL_MS = process.env.APPLICATION_SAVING_INTERVAL_MS || config.APPLICATION_SAVING_INTERVAL_MS
const TERMINATION_CHECK_INTERVAL_MS = process.env.TERMINATION_CHECK_INTERVAL_MS || config.TERMINATION_CHECK_INTERVAL_MS

// getting execution number
const execArg = process.argv.find(arg => arg.startsWith('--exec='))
const execNum = execArg ? parseInt(execArg.split('=')[1]) : 0

// server instance
const server = dgram.createSocket('udp4')
let msgCount = 0

// metrics (DIS)
const metricsFile = fs.createWriteStream(`${PROTO_RECEIVER_METRICS_DIR}/proto-receiver-metrics-${execNum}.csv`)
metricsFile.write('Msg_Received,Received_Time,Decoding_Time\n')
let metrics = []

// message data (DIS)
const messagesFile = fs.createWriteStream(`${PROTO_MESSAGES_DIR}/proto-received-msg-${execNum}.csv`)
messagesFile.write('Force,ID,Kind,Domain,Country,Category,Timestamp,Location_X,Location_Y,Location_Z\n')
let messages = []

// server functions
server.on('listening', () => {
  console.log(`[PROTO-RECEIVER] => server listening at ${UDP_RECEIVER_IP}:${UDP_PORT}...`)
})

server.on('message', async (msg, rinfo) => {
  const pduData = await decodeProtoESPDU(msg)
  
  msgCount++
  
  metrics.push(`${msgCount},${pduData.receivedTime},${pduData.decodingTime.toFixed(4)}`)
  
  // show request
  //console.log(`[PROTO-RECEIVER]: message received from ${rinfo.address}:${rinfo.port} with ${msg.length} bytes. Decoding Time: ${pduData.decodingTime}. Messages received so far: ${msgCount}.`)

  // save message
  messages.push([
     pduData.decodedPdu.forceId,
     pduData.decodedPdu.entityID.entityID,
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
    console.log(`[PROTO-RECEIVER] => received STOP commmand from experiment ${execNum}, stopping server...`)
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
}, APPLICATION_SAVING_INTERVAL_MS)

// ---termination and stoping server
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
  }, TERMINATION_CHECK_INTERVAL_MS)  
}


// ---start server
server.bind(UDP_PORT, UDP_RECEIVER_IP)