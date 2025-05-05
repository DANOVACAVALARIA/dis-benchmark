import dgram from 'dgram'
import fs from 'fs'

import { encodeESPDU } from './lib/encodeESPDU.js'
import { generateMessages } from './lib/generateMessages.js'
import { saveCsvFile } from './lib/saveCsvFile.js'


// load config
import config from './config.json' with { type: 'json' }

// getting execution number
const execArg = process.argv.find(arg => arg.startsWith('--exec='))
const execNum = execArg ? parseInt(execArg.split('=')[1]) : 0

// client instance
const client = dgram.createSocket('udp4')

// metrics (DIS)
let packetCount = 0
const metricsFile = fs.createWriteStream(`${config.DIS_SENDER_METRICS_DIR}/dis-sender-metrics-${execNum}.csv`)
metricsFile.write('PacketCount,Sent_Time,Encoding_Time,Size_In_Bytes,Msg_Rate\n')
let metrics = []

// PDU msg sent to server
const sendESPDU = async () => {
  const pduData = await encodeESPDU()
  
  packetCount++
  metrics.push(`${packetCount},${pduData.sentTime},${pduData.encodingTime.toFixed(4)},${pduData.encodedPdu.length},${(packetCount / (pduData.sentTime/1000)).toFixed(2)}`)
  client.send(pduData.encodedPdu, 0, pduData.encodedPdu.length, config.UDP_PORT, config.UDP_RECEIVER_IP, (err, bytes) => {
    
    // if (err) {
    //   console.error('Error on sending ESPU with description ', err)
    // } else {
    //   console.log(`[DIS-SENDER] => ESPDU sent to ${config.HOST}:${config.PORT} with ${bytes} bytes | Encoding time: ${pduData.encodingTime.toFixed(4)}.`)
    // }
  })

  // ---termination check
  if (packetCount == config.TOTAL_ESPDU_TO_BE_SENT) {
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
    }, config.TERMINATION_CHECK_INTERVAL_MS)    
  }  
}

// ---save metrics
const saveMetrics = setInterval(async () => {
  if (await saveCsvFile(metricsFile, metrics)) {
    metrics = []
  }
}, config.APPLICATION_SAVING_INTERVAL_MS)


// ---start PDU generation
generateMessages(config.TOTAL_ESPDU_TO_BE_SENT,
                config.INTERVAL_BETWEEN_ESPDU_IN_MS,
                sendESPDU)