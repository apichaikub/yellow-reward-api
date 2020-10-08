import express from 'express'
import verifyToken from '../middleware/verifyToken'
import meController from '../controller/meController'

const router = express.Router()

router.post('/rewards/:id/exchange',
    (req, res, next) => {
      res.opeationName = 'postMeRewardsExchange'
      next()
    },
    verifyToken,
    meController.pointsExchange,
)

export default router
