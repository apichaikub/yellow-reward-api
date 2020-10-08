import { receiptService } from '../services'

/**
 * receiptController
 */
class receiptController {
  /**
   * @param {*} req
   * @param {*} res
   */
  async list(req, res) {
    try {
      const models = req.models
      const data = await receiptService.list(models)
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
      const data = await receiptService.single(params, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
   * @param {Object} req.body
   * @param {String} req.body.fileUrl
   * @param {String} req.body.fileExtension
   * @param {*} res
   */
  async create(req, res) {
    try {
      const input = req.body
      const models = req.models
      const data = await receiptService.create(input, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
   * @param {Object} req.body
   * @param {String} req.body.fileUrl
   * @param {String} req.body.fileExtension
   * @param {*} res
   */
  async update(req, res) {
    try {
      const params = req.params
      const input = req.body
      const models = req.models
      const data = await receiptService.update(params, input, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }

  /**
   * @param {*} req
   * @param {Object} req.body
   * @param {Number} req.body.points
   * @param {*} res
   */
  async updatePoints(req, res) {
    try {
      const params = req.params
      const input = req.body
      const models = req.models
      const data = await receiptService.updatePoints(params, input, models)
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
      const data = await receiptService.remove(params, models)
      res.success(data)
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }
}

export default new receiptController()
