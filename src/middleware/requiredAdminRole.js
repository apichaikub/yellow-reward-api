import { USER_ROLE } from '../helper/enum'

export default async (req, res, next) => {
  if (req.user.role !== USER_ROLE.ENUM.ADMIN) {
    return res.status(401).fail('Permission denied.')
  }

  next()
}
