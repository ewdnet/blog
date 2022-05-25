import express from 'express'
import { postTag, getTags, getTagById } from '../controllers/tag.js'

const { Router } = express

const router = Router()

router.post('/tag', postTag)
router.get('/tags', getTags)
router.get('/tag/:id', getTagById)

export default router
