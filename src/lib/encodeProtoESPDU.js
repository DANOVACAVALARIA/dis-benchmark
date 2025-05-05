import { performance } from 'perf_hooks'

import { protoESPDU } from './proto/protoESPDU.js'

export const encodeProtoESPDU = async () => {
  const startTime = performance.now()
  const encodedPdu = protoESPDU()
  const encodingTime = performance.now() - startTime
  const sentTime = performance.now()
  
  return {
    encodedPdu,
    sentTime,
    encodingTime,
  }
}