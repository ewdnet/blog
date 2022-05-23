import express from 'express'
import { getComments, postComment } from '../controllers/comment.js'

const { Router } = express

const router = Router()

router.get('/comments', getComments)
router.post('/comment', postComment)

export default router
