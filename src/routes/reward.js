import express from 'express'
import { validatorRewardCreate, validatorRewardUpdate } from '../middleware/validation'
import rewardController from '../controller/rewardController'

const router = express.Router()

router.get('/',
    (req, res, next) => {
      res.opeationName = 'getRewardsList'
      next()
    },
    rewardController.list,
)

router.get('/:id',
    (req, res, next) => {
      res.opeationName = 'getRewardsSingle'
      next()
    },
    rewardController.single,
)

router.post('/',
    (req, res, next) => {
      res.opeationName = 'postRewardsCreate'
      next()
    },
    validatorRewardCreate,
    rewardController.create,
)

router.put('/:id',
    (req, res, next) => {
      res.opeationName = 'putRewardsUpdate'
      next()
    },
    validatorRewardUpdate,
    rewardController.update,
)

router.delete('/:id',
    (req, res, next) => {
      res.opeationName = 'deleteRewardsDelete'
      next()
    },
    rewardController.remove,
)

export default router
