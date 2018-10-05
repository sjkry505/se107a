/**
 *Creates an array of array values not included in the other given 
 *arrays using SameValueZero for equality comparisons. The order 
 *and references of result values are determined by the first array.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.difference([2, 1], [2, 3])
 * // => [1]
 *
 * _.difference([2, 1, 3, 8], [2, 4, 8, 9])
 * // => [ 1, 3 ]
 */

function difference () {
    let list = arguments[0]
    for(let i=1; i<arguments.length; i++) {
        let x = arguments[i]
        for(let j=0; j<list.length;j++) {
            for(let k=0;k<x.length; k++) {
                if(list[j] === x[k])
                    list[j] = NaN
            }
        }
    }
    let ans = []
    for(let i=0; i<list.length;i++) {
        if (!isNaN(list[i]))
            ans.push(list.slice(i,i+1).pop())
    }
    return ans
}
  
  module.exports = difference