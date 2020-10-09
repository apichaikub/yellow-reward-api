import { expect } from 'chai'
import { encrypt, decrypt } from '../../../helper/crypto'

describe('Unit Test: helpers > encrypt', () => {
  it('should able to encrypt and decrypt correctly', (done) => {
    (async () => {
      const originalText = 'yellow'
      const encryptedValue = await encrypt(originalText)
      const decryptedValue = await decrypt(encryptedValue)
      expect(typeof encryptedValue).to.equal('string')
      expect(decryptedValue).to.equal(originalText)
      done()
    })()
  })
})
