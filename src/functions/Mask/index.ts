import CONSTANTS from '../../constants'

const arrangeInAscendingOrder = (masks: string[]): string[] => 
  masks.sort((a, b) => a.length - b.length)

const maskValue = (value: string = '', mask: string = '') => {
  let interatorMask = 0
  let interatorValue = 0
  let output = ''

  while (interatorMask < mask.length && interatorValue < value.length) {
    let cMask = mask[interatorMask]

    const masker = CONSTANTS.TOKENS[cMask]
    const cValue = value[interatorValue]

    if (masker && !masker.escape) {
      if (masker.pattern.test(cValue)) {
        output += masker.transform || cValue
        interatorMask++
      }

      interatorValue++
    } else {
      if (masker && masker.escape) {
        interatorMask++
        cMask = mask[interatorMask]
      }

      output += cMask

      if (cValue === cMask) interatorValue++ 

      interatorMask++
    }
  }
  
  let restOutput = ''

  while (interatorMask < mask.length) {
    const cMask = mask[interatorMask]

    if (CONSTANTS.TOKENS[cMask]) {
      restOutput = ''
      break
    }

    restOutput += cMask
    interatorMask++
  }
  
  return output + restOutput
}

const SimpleMask = (value: string, masks: string[]): string => {
  const orderedMasks = arrangeInAscendingOrder(masks)
  let interator = 0
  
  while (interator < orderedMasks.length) {
    const currentMask = orderedMasks[interator]
    interator++
    const nextMask = masks[interator]

    if (!(nextMask && maskValue(value, nextMask).length > currentMask.length)) {
      return maskValue(value,(currentMask))
    }
  }

  return ''
}

export default SimpleMask