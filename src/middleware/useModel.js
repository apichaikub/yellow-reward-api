import { models } from '../models'
import { postgreYellow } from '../database'

export default (req, res, next) => {
  postgreYellow.authenticate().then(() => {
    req.models = models
    next()
  }).catch((err) => {
    res.status(503).fail(err)
  })
}
