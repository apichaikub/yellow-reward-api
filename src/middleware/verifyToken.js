import { verifyToken, getToken } from '../helper/auth'
import { TOKEN_TYPE } from '../helper/enum'

export default async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).fail('Authorization header is required.')
  }

  const { BEARER } = TOKEN_TYPE.ENUM
  const [tokenType, tokenValue] = getToken(req.headers.authorization)
  let error = true; let decoded = null

  if (tokenType === BEARER) {
    [error, decoded] = verifyToken(tokenValue)
  }

  if (error) {
    return res.status(401).fail('Invalid tokens')
  }

  req.user = decoded
  next()
}
