/**
 *Recursively flattens array.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 *
 */

function flatten(arr) { 
    let y = []
    for(let i= 0;i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            for(let j=0; j<arr[i].length; j++) 
                y.push(arr[i][j])
        }
        else y.push(arr[i])
    }
    return y
}

function flattenDeep(array) {
    for(let i=0; i<array.length; i++) {
        if(Array.isArray(array[i])) 
            array = flatten(array)
    }
    return array
}
  
  module.exports = flattenDeep