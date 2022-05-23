import express from 'express'
import { loginUser } from '../controllers/auth.js'

const { Router } = express
const router = Router()

router.post('/', loginUser)

export default router
