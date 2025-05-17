import { performance } from 'perf_hooks'

import { protoESPDU } from './proto/protoESPDU.js'

export const encodeProtoESPDU = async (rng) => {
  const startTime = performance.now()
  const encodedPdu = protoESPDU(rng)
  const encodingTime = performance.now() - startTime
  const sentTime = performance.now()
  
  return {
    encodedPdu,
    sentTime,
    encodingTime,
  }
}