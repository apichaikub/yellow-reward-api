import { userService } from '../services'

/**
 * receiptController
 */
class receiptController {
  /**
   * @param {*} req
   * @param {*} res
   */
  async info(req, res) {
    try {
      const user = req.user
      const models = req.models
      const data = await userService.info(user, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
   * @param {*} res
   */
  async myReward(req, res) {
    try {
      const user = req.user
      const models = req.models
      const data = await userService.myReward(user, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
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
