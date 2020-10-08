import express from 'express'
import verifyToken from '../middleware/verifyToken'
import meController from '../controller/meController'

const router = express.Router()

router.get('/',
    (req, res, next) => {
      res.opeationName = 'getMe'
      next()
    },
    verifyToken,
    meController.info,
)

router.get('/rewards',
    (req, res, next) => {
      res.opeationName = 'getReward'
      next()
    },
    verifyToken,
    meController.myReward,
)

router.post('/rewards/:id/exchange',
    (req, res, next) => {
      res.opeationName = 'postMeRewardsExchange'
      next()
    },
    verifyToken,
    meController.pointsExchange,
)

export default router
