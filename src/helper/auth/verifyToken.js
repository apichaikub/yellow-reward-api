import jwt from 'jsonwebtoken'
import config from '../../config'

export default (accessToken) => {
  const { jwt: { secret } } = config
  try {
    const decoded = jwt.verify(accessToken, secret)
    return [null, decoded]
  } catch (error) {
    return [error, null]
  }
}
