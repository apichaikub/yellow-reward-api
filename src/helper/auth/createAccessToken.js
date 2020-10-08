import jwt from 'jsonwebtoken'
import { USER_ROLE } from '../enum'
import config from '../../config'

export default (user) => {
  // we can refactor this later by store user roles in db.
  const getScopes = (role) => {
    if (role === USER_ROLE.ENUM.ADMIN) {
      return ['reward.read', 'reward.write', 'user.read', 'user.write']
    } else {
      return ['reward.read']
    }
  }

  return jwt.sign(
      { id: user.userId, role: user.role, scopes: getScopes(user.role) },
      config.jwt.secret,
      { expiresIn: config.expiresIn.accessToken },
  )
}
