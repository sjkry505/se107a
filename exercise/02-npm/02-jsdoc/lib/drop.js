/**
 *Creates a slice of array with n elements dropped from the beginning.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * _.drop([1, 2, 3])
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2)
 * // => [3]
 */

function drop() {
    let list = arguments[0]
    let x = arguments[1]

    if (x === undefined)
        list = list.slice(1)
    else list = list.slice(x)
    return list
}
  
  module.exports = drop