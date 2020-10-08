import express from 'express'
import verifyToken from '../middleware/verifyToken'
import requiredAdminRole from '../middleware/requiredAdminRole'
import { validatorRewardCreate, validatorRewardUpdate } from '../middleware/validation'
import rewardController from '../controller/rewardController'

const router = express.Router()

router.get('/',
    (req, res, next) => {
      res.opeationName = 'getRewardsList'
      next()
    },
    verifyToken,
    requiredAdminRole,
    rewardController.list,
)

router.get('/:id',
    (req, res, next) => {
      res.opeationName = 'getRewardsSingle'
      next()
    },
    verifyToken,
    requiredAdminRole,
    rewardController.single,
)

router.post('/',
    (req, res, next) => {
      res.opeationName = 'postRewardsCreate'
      next()
    },
    verifyToken,
    requiredAdminRole,
    validatorRewardCreate,
    rewardController.create,
)

router.put('/:id',
    (req, res, next) => {
      res.opeationName = 'putRewardsUpdate'
      next()
    },
    verifyToken,
    requiredAdminRole,
    validatorRewardUpdate,
    rewardController.update,
)

router.delete('/:id',
    (req, res, next) => {
      res.opeationName = 'deleteRewardsDelete'
      next()
    },
    verifyToken,
    requiredAdminRole,
    rewardController.remove,
)

export default router
