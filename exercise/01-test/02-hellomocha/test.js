const assert = require('assert')

const array = [1,2,3]

describe('test array', () => {
    it('it should be [2, 3]', () => {
        assert.deepStrictEqual(array.slice(1), [2, 3])
    })
})