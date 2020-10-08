import { rewardService } from '../services'

/**
 * rewardController
 */
class rewardController {
  /**
   * @param {*} req
   * @param {*} res
   */
  async list(req, res) {
    try {
      const models = req.models
      const data = await rewardService.list(models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
   * @param {*} res
   */
  async single(req, res) {
    try {
      const params = req.params
      const models = req.models
      const data = await rewardService.single(params, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
   * @param {Object} req.body
   * @param {String} req.body.name
   * @param {Number} req.body.points
   * @param {String} req.body.fileUrl
   * @param {String} req.body.fileExtension
   * @param {*} res
   */
  async create(req, res) {
    try {
      const input = req.body
      const models = req.models
      const data = await rewardService.create(input, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
   * @param {Object} req.body
   * @param {String} req.body.name
   * @param {Number} req.body.points
   * @param {String} req.body.fileUrl
   * @param {String} req.body.fileExtension
   * @param {*} res
   */
  async update(req, res) {
    try {
      const params = req.params
      const input = req.body
      const models = req.models
      const data = await rewardService.update(params, input, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
   * @param {*} res
   */
  async remove(req, res) {
    try {
      const params = req.params
      const models = req.models
      const data = await rewardService.remove(params, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }
}

export default new rewardController()
