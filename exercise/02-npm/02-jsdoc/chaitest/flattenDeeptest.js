const expect = require('chai').expect
const _ = require('../Exlodash')

const other = _.flattenDeep([1, [2, [3, [4]], 5]])

describe('test flattenDeep', () => {
    it('result should be [1, 2, 3, 4, 5]', () => {
        expect(other).to.deep.equal([1, 2, 3, 4, 5])
    })
})