import { performance } from 'perf_hooks'

import DISUtils from './dis/DISUtils.js'

const utils = new DISUtils()


export const decodeESPDU = async (msg) => {
  const startTime = performance.now()
  const decodedPdu = utils.DISObjectFromBuffer(msg)
  const decodingTime = performance.now() - startTime
  const receivedTime = performance.now()

  return {
    decodedPdu,
    receivedTime,
    decodingTime,
  }
}