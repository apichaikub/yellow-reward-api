import { userService } from '../services'

/**
 * receiptController
 */
class receiptController {
  /**
   * @param {*} req
   * @param {Object} req.body
   * @param {Number} req.body.points
   * @param {*} res
   */
  async pointsExchange(req, res) {
    try {
      const user = req.user
      const params = req.params
      const models = req.models
      const data = await userService.pointsExchange(user, params, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }
}

export default new receiptController()
