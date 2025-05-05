import { performance } from 'perf_hooks'

import DISUtils from './dis/DISUtils.js'
import { ESPDU } from './dis/ESPDU.js'

const utils = new DISUtils()


export const encodeESPDU = async () => {
  const startTime = performance.now()
  const encodedPdu = utils.DISPduToBuffer(ESPDU())
  const encodingTime = performance.now() - startTime
  const sentTime = performance.now()
  
  return {
    encodedPdu,
    sentTime,
    encodingTime,
  }
}