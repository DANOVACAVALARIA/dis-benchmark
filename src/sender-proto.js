import dgram from 'dgram'
import fs from 'fs'

import seedrandom from 'seedrandom'

import { encodeProtoESPDU } from './lib/encodeProtoESPDU.js'
import { generateMessages } from './lib/generateMessages.js'
import { saveCsvFile } from './lib/saveCsvFile.js'


// load config
import config from './config.json' with { type: 'json' }

// set env variables
const PROTO_SENDER_METRICS_DIR = process.env.PROTO_SENDER_METRICS_DIR || config.PROTO_SENDER_METRICS_DIR
const UDP_RECEIVER_IP = process.env.UDP_RECEIVER_IP || config.UDP_RECEIVER_IP
const UDP_PORT = process.env.UDP_PORT || config.UDP_PORT
const TOTAL_ESPDU_TO_BE_SENT = process.env.TOTAL_ESPDU_TO_BE_SENT || config.TOTAL_ESPDU_TO_BE_SENT
const TERMINATION_CHECK_INTERVAL_MS = process.env.TERMINATION_CHECK_INTERVAL_MS || config.TERMINATION_CHECK_INTERVAL_MS
const APPLICATION_SAVING_INTERVAL_MS = process.env.APPLICATION_SAVING_INTERVAL_MS || config.APPLICATION_SAVING_INTERVAL_MS
const INTERVAL_BETWEEN_ESPDU_IN_MS = process.env.INTERVAL_BETWEEN_ESPDU_IN_MS || config.INTERVAL_BETWEEN_ESPDU_IN_MS

// getting execution number
const execArg = process.argv.find(arg => arg.startsWith('--exec='))
const execNum = execArg ? parseInt(execArg.split('=')[1]) : 0

// client instance
const client = dgram.createSocket('udp4')

// metrics (protobuf)
let packetCount = 0
const metricsFile = fs.createWriteStream(`${PROTO_SENDER_METRICS_DIR}/proto-sender-metrics-${execNum}.csv`)
metricsFile.write('PacketCount,Sent_Time,Encoding_Time,Size_In_Bytes,Msg_Rate\n')
let metrics = []

// create seed
const rng = seedrandom(process.env.SEED || config.SEED)

// PDU msg sent to server
const sendESPDU = async () => {
  const pduData = await encodeProtoESPDU(rng)
  
  packetCount++
  metrics.push(`${packetCount},${pduData.sentTime},${pduData.encodingTime.toFixed(4)},${pduData.encodedPdu.length},${(packetCount / (pduData.sentTime/1000)).toFixed(2)}`)
  client.send(pduData.encodedPdu, 0, pduData.encodedPdu.length, UDP_PORT, UDP_RECEIVER_IP, (err, bytes) => {
    
    // if (err) {
    //   console.error('Error on sending ESPU with description ', err)
    // } else {
    //   console.log(`[PROTO-SENDER] => ESPDU sent to ${config.HOST}:${config.PORT} with ${bytes} bytes | Encoding time: ${pduData.encodingTime.toFixed(4)}.`)
    // }
  })

  // ---termination check
  if (packetCount == TOTAL_ESPDU_TO_BE_SENT) {
    clearInterval(saveMetrics)
    setTimeout(async() => {
      if(await saveCsvFile(metricsFile, metrics)) {
        metrics = []
        metricsFile.end()
        client.close(() => {
          console.log('SENDER FINISHED')
          process.exit(0)
        })
      }
    }, TERMINATION_CHECK_INTERVAL_MS)    
  } 
}

// ---save metrics
const saveMetrics = setInterval(async () => {
  if (await saveCsvFile(metricsFile, metrics)) {
    metrics = []
  }
}, APPLICATION_SAVING_INTERVAL_MS)


// ---start PDU generation
generateMessages(TOTAL_ESPDU_TO_BE_SENT,
                INTERVAL_BETWEEN_ESPDU_IN_MS,
                sendESPDU)