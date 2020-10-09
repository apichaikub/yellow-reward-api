import { expect } from 'chai'
import { ResponseError } from '../../../utils/extend'

describe('Unit Test: utils > lib > extend', () => {
  it('should able to set error', (done) => {
    const value = {
      code: 403,
      message: 'The username or password is invalid.',
    }
    const error = new ResponseError(value)
    expect(error.toString()).to.equal(`Error: ${value.message}`)
    done()
  })
})
