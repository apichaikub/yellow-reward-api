import express from 'express'
import verifyToken from '../middleware/verifyToken'
import { validatorRewardCreate, validatorRewardUpdate } from '../middleware/validation'
import rewardController from '../controller/rewardController'

const router = express.Router()

router.get('/',
    (req, res, next) => {
      res.opeationName = 'getRewardsList'
      next()
    },
    verifyToken,
    rewardController.list,
)

router.get('/:id',
    (req, res, next) => {
      res.opeationName = 'getRewardsSingle'
      next()
    },
    verifyToken,
    rewardController.single,
)

router.post('/',
    (req, res, next) => {
      res.opeationName = 'postRewardsCreate'
      next()
    },
    verifyToken,
    validatorRewardCreate,
    rewardController.create,
)

router.put('/:id',
    (req, res, next) => {
      res.opeationName = 'putRewardsUpdate'
      next()
    },
    verifyToken,
    validatorRewardUpdate,
    rewardController.update,
)

router.delete('/:id',
    (req, res, next) => {
      res.opeationName = 'deleteRewardsDelete'
      next()
    },
    verifyToken,
    rewardController.remove,
)

export default router
