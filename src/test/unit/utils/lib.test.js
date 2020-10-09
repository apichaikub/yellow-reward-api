import { expect } from 'chai'
import { pickFirstKey } from '../../../utils/lib'

describe('Unit Test: utils > lib > pickFirstKey', () => {
  it('should pick first property in object correctly', (done) => {
    const obj = {
      id: 1,
      name: 'Yellow Idea',
      developedBy: 'thai',
    }
    const id = pickFirstKey(obj)
    expect(id).to.equal(1)
    done()
  })
})
