import express from 'express'
import verifyToken from '../middleware/verifyToken'
import requiredAdminRole from '../middleware/requiredAdminRole'
import { validatorReceiptCreate, validatorReceiptUpdate, validatorReceiptUpdatePoints } from '../middleware/validation'
import receiptController from '../controller/receiptController'

const router = express.Router()

router.get('/',
    (req, res, next) => {
      res.opeationName = 'getReceiptList'
      next()
    },
    verifyToken,
    receiptController.list,
)

router.get('/:id',
    (req, res, next) => {
      res.opeationName = 'getReceiptSingle'
      next()
    },
    verifyToken,
    receiptController.single,
)

router.post('/',
    (req, res, next) => {
      res.opeationName = 'postReceiptCreate'
      next()
    },
    validatorReceiptCreate,
    verifyToken,
    receiptController.create,
)

router.put('/:id',
    (req, res, next) => {
      res.opeationName = 'putReceiptUpdate'
      next()
    },
    validatorReceiptUpdate,
    verifyToken,
    receiptController.update,
)

router.put('/:id/points',
    (req, res, next) => {
      res.opeationName = 'putReceiptUpdatePoints'
      next()
    },
    validatorReceiptUpdatePoints,
    verifyToken,
    requiredAdminRole,
    receiptController.updatePoints,
)

router.delete('/:id',
    (req, res, next) => {
      res.opeationName = 'deleteReceiptDelete'
      next()
    },
    verifyToken,
    receiptController.remove,
)

export default router
