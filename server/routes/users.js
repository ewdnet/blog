import express from 'express'
import { registerUser, getCurrentUser } from '../controllers/users.js'
import auth from '../middleware/auth.js'

const { Router } = express
const router = Router()

router.post('/', registerUser)

router.get('/me', auth, getCurrentUser)

export default router
