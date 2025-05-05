import { performance } from 'perf_hooks'

import protobuf from 'protobufjs'

// load protubuf data
const root = await protobuf.load('src/lib/proto/espdu.proto')
const EntityStatePduProto = root.lookupType('dis.EntityStatePdu')

export const decodeProtoESPDU = async (msg) => {
  const startTime = performance.now()
  const decodedPdu = EntityStatePduProto.decode(msg)
  const decodingTime = performance.now() - startTime
  const receivedTime = performance.now()

  return {
    decodedPdu,
    receivedTime,
    decodingTime,
  }
}