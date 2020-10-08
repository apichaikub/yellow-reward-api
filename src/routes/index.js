import express from 'express'
import register from './register'
import auth from './auth'
import reward from './reward'
import receipt from './receipt'

const router = express.Router()

router.get('/', (req, res) => res.send('Yellow Service'))
router.use('/register', register)
router.use('/oauth2', auth)
router.use('/rewards', reward)
router.use('/receipts', receipt)

export default router
