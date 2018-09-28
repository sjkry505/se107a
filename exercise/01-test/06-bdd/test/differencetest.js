const assert = require('assert')
const _ = require('../Exlodash')

describe('test difference', () => {
    it('result should be [1]', () => {
        assert.deepStrictEqual(_.difference([2, 1], [2, 3]), [1])
    })
    it('result should not be [2]', () => {
        assert.notDeepStrictEqual(_.difference([2, 1], [2, 3]), [2])
    })
})