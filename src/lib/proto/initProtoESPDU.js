import protobuf from 'protobufjs'

let EntityStatePduProto = null
let protoESPDU = null 

export const initProtoESPDU = async () => { 
  
  // load proto file
  const root = await protobuf.load('src/lib/proto/espdu.proto')
  if (!root) throw new Error('Failed to load espdu.proto')
  
  // create message
  EntityStatePduProto = root.lookupType('dis.EntityStatePdu') 
  if(!EntityStatePduProto) throw new Error('EntityStatePdu type not found')

  // instatiante message
  protoESPDU = EntityStatePduProto.create({
    protocolVersion: 1,
    exerciseID: 0,
    pduType: 1,
    protocolFamily: 1,
    timestamp: 0,
    pduLength: 0,
    padding: 0,
    entityID: root.lookupType('dis.EntityID').create({
      siteID: 2,
      applicationID: 1,
      entityID: 0
    }),
    forceId: 1,
    numberOfArticulationParameters: 0,
    entityType: root.lookupType('dis.EntityType').create({
      entityKind: 1,
      domain: 1,
      country: 29,
      category: 1,
      subcategory: 0,
      specific: 0,
      extra: 0,
    }),
    alternativeEntityType: root.lookupType('dis.EntityType').create({
      entityKind: 1,
      domain: 1,
      country: 29,
      category: 1,
      subcategory: 0,
      specific: 0,
      extra: 0,
    }),
    entityLinearVelocity: root.lookupType('dis.Vector3Int').create({
      x: 0,
      y: 0,
      z: 0,
    }),
    entityLocation: root.lookupType('dis.Vector3Int').create({
      x: 0,
      y: 0,
      z: 0,
    }),
    entityOrientation: root.lookupType('dis.Orientation').create({
      psi: 0,
      theta: 0,
      phi: 0,
    }),
    entityAppearance: 0,
    deadReckoningParameters: root.lookupType('dis.DeadReckoningParameter').create({
      algorithm: 0,
      otherParameters: Buffer.alloc(15, 0),
      linearAcceleration: root.lookupType('dis.Vector3Int').create({
        x: 0,
        y: 0,
        z: 0,
      }),
      angularVelocity: root.lookupType('dis.Vector3Int').create({
        x: 0,
        y: 0,
        z: 0,
      }),      
    }),
    marking: root.lookupType('dis.Marking').create({
      characterSet: 1,
      characters:  Buffer.alloc(11, 0),
    }),
    capabilities: 0, 
    articulationParameters: [],
  }) 

  return [EntityStatePduProto, protoESPDU]
}