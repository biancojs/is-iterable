/**
 * It will return true if the object can be looped
 * @param   { * }       obj - anything
 * @returns { boolean } either true or false
 */
export default function isIterable(obj) {
  return typeof obj[Symbol.iterator] === 'function'
}