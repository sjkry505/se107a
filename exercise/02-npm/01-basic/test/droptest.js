const assert = require('assert')
const _=require('../index')

describe('test drop', () => {
    it('result should be [2,3]', () => {
        assert.deepStrictEqual(_.drop([1, 2, 3]), [2, 3])
    })
    it('result should be [3]', () => {
        assert.deepStrictEqual(_.drop([1, 2, 3], 2), [3])
    })
    it('result should be []', () => {
        assert.deepStrictEqual(_.drop([1, 2, 3], 5), [])
    })
})