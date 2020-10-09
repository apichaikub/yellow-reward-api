import { expect } from 'chai'
import { validator } from '../../../helper/validator'

describe('Unit Test: validator', () => {
  it('should validate pass', (done) => {
    const fields = {
      name: 'Yellow Platform',
      points: 5,
    }
    const roles = {
      name: 'required|string',
      points: 'required|integer|min:1',
    }
    validator(fields, roles, (err) => {
      expect(err).to.equal(null)
      done()
    })
  })

  it('should validate fail', (done) => {
    const fields = {
      name: '',
      points: 0,
    }
    const roles = {
      name: 'required|string',
      points: 'required|integer|min:1',
    }
    validator(fields, roles, (err) => {
      expect(typeof err).to.equal('object')
      done()
    })
  })
})
