import express from 'express'
import {
  getArticles,
  postArticle,
  getArticleById,
  getArticleByKeyword,
} from '../controllers/article.js'

const { Router } = express

const router = Router()

router.get('/articles', getArticles)
router.post('/article', postArticle)
router.get('/article/:id', getArticleById)
router.get('/articles/search/:keyword', getArticleByKeyword)

export default router
