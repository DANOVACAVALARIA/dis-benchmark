import { dis } from './generated/espdu_pb.js'

let protoESPDU = null 

export const initProtoESPDU = async () => { 
  
  
  protoESPDU = dis.EntityStatePdu.create({
    protocolVersion: dis.ProtocolVersion.IEEE_1278_1_1995,
    exerciseID: 0,
    pduType: dis.PduType.ENTITY_STATE,
    protocolFamily: dis.ProtocolFamily.ENTITY_INFORMATION,
    timestamp: 0,
    pduLength: 0,
    padding: 0,

    // EntityID
    entityID: {
      siteID: 2,
      applicationID: 1,
      entityID: 0
    },

    forceId: dis.ForceId.FRIENDLY,
    numberOfArticulationParameters: 0,

    // EntityType
    entityType: {
      entityKind: 1,
      domain: 1,
      country: 29,
      category: 1,
      subcategory: 0,
      specific: 0,
      extra: 0
    },

    // Alternative EntityType (same as entityType)
    alternativeEntityType: {
      entityKind: 1,
      domain: 1,
      country: 29,
      category: 1,
      subcategory: 0,
      specific: 0,
      extra: 0
    },

    // Linear Velocity
    entityLinearVelocity: {
      x: 0,
      y: 0,
      z: 0
    },

    // Location
    entityLocation: {
      x: 0,
      y: 0,
      z: 0
    },

    // Orientation
    entityOrientation: {
      psi: 0,
      theta: 0,
      phi: 0
    },

    entityAppearance: 0,

    // Dead Reckoning Parameters
    deadReckoningParameters: {
      algorithm: 0,
      otherParameters: new Uint8Array(15),
      linearAcceleration: {
        x: 0,
        y: 0,
        z: 0
      },
      angularVelocity: {
        x: 0,
        y: 0,
        z: 0
      }
    },

    // Marking
    marking: {
      characterSet: dis.CharacterSet.ASCII,
      characters: new Uint8Array(11)
    },

    capabilities: 0,
    articulationParameters: []
  })

  return protoESPDU
}