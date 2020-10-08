import express from 'express'
import { validatorReceiptCreate, validatorReceiptUpdate, validatorReceiptUpdatePoints } from '../middleware/validation'
import receiptController from '../controller/receiptController'

const router = express.Router()

router.get('/',
    (req, res, next) => {
      res.opeationName = 'getReceiptList'
      next()
    },
    receiptController.list,
)

router.get('/:id',
    (req, res, next) => {
      res.opeationName = 'getReceiptSingle'
      next()
    },
    receiptController.single,
)

router.post('/',
    (req, res, next) => {
      res.opeationName = 'postReceiptCreate'
      next()
    },
    validatorReceiptCreate,
    receiptController.create,
)

router.put('/:id',
    (req, res, next) => {
      res.opeationName = 'putReceiptUpdate'
      next()
    },
    validatorReceiptUpdate,
    receiptController.update,
)

router.put('/:id/points',
    (req, res, next) => {
      res.opeationName = 'putReceiptUpdatePoints'
      next()
    },
    validatorReceiptUpdatePoints,
    receiptController.updatePoints,
)

router.delete('/:id',
    (req, res, next) => {
      res.opeationName = 'deleteReceiptDelete'
      next()
    },
    receiptController.remove,
)

export default router
