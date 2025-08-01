import { performance } from 'perf_hooks'
import { dis } from './proto/generated/espdu_pb.js'

export const decodeProtoESPDU = async (msg) => {
  const startTime = performance.now()
  const decodedPdu = dis.EntityStatePdu.decode(msg)
  const decodingTime = performance.now() - startTime
  const receivedTime = performance.now()

  return {
    decodedPdu,
    receivedTime,
    decodingTime,
  }
}