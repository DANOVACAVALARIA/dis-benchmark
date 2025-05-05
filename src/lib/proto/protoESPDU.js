
import { timestampToDis } from '../utils/DISTimestamp.js'

import { initProtoESPDU } from './initProtoESPDU.js'


// instantiate message (protobuf)
let [EntityStatePduProto, entityStateProto] = await initProtoESPDU()


// encode protobuf message
export const protoESPDU = () => {
  
  entityStateProto.entityID.entityID = Math.ceil(Math.random() * 4) 
  entityStateProto.entityLocation.x = Math.round(-30001142 + (Math.random() < 0.5 ? -1: 1))
  entityStateProto.entityLocation.y = Math.round(-55016077 + (Math.random() < 0.5 ? -1 : 1))
  entityStateProto.timestamp = timestampToDis()
  

  const encodedProtoMsg = EntityStatePduProto.encode(entityStateProto).finish()

  return encodedProtoMsg
}