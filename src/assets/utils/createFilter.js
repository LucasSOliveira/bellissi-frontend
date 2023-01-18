/* eslint-disable */
const maskit = (mask, value) => {
  let maskedString = ''
  let index = 0
  const maskLength = mask.length

  while (index < maskLength) {
    if (index === value.length) {
      break
    }
    if (mask[index] === '#') {
      maskedString += value[index] || ''
    } else {
      if (!mask[index]) {
        break
      }
      maskedString += mask[index] || ''
      mask = mask.replace(mask[index], '')
      index--
    }
    index++
  }
  return maskedString
}

const spliceValue = (value, ...splice) => {
  const splittedValue = value.split('')

  splittedValue.splice(...splice)
  return splittedValue.join('')
}

const isArray = item => item && item.constructor === Array

/**
 * Create Filter - (MASK, VALUE)
 * @param {number|string|array} mask
 * @param {string|number} value
 * ('###-##', 'Abc12') to 'Abc-12'
 * @returns {string} With the choosen one filter
 */
export default (mask, value, options = {}) => {
  if (!value) {
    return value
  }
  value = String(value)
  if (isArray(options.splice)) {
    value = spliceValue(value, ...options.splice)
  }
  if (isArray(mask) && mask.length) {
    mask = mask.sort((a, b) => a.length - b.length)
    const maskLength = mask.length
    let index = 0

    while (index < maskLength) {
      const currentMask = mask[index]
      index++ // eslint-disable-line
      const nextMask = mask[index]

      if (!(nextMask && maskit(nextMask, value).length > currentMask.length)) {
        return maskit(currentMask, value)
      }
    }
    return maskit(mask, value)
  }

  return maskit(mask, value)
}
