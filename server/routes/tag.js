import express from 'express'
import { getTags, postTag } from '../controllers/tag.js'

const { Router } = express

const router = Router()

router.post('/tag', postTag)
router.get('/tags', getTags)

export default router
