import Article from '../models/article.js'

export const postArticle = async (req, res) => {
  try {
    const { title, cover, body, description, tags, comments } = req.body
    const article = await Article.create({
      title,
      cover,
      body,
      description,
      tags,
      comments,
    })

    await res.json(article)
  } catch (error) {
    res.status(500).send('Error posting article')
  }
}

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({}).populate('tags')
    await res.json(articles)
  } catch (error) {
    res.status(500).send('Error getting articles')
  }
}

export const getArticleById = async (req, res) => {
  try {
    const { id } = req.params
    const article = await Article.findById(id).populate('tags').populate('comments')
    await res.json(article)
  } catch (error) {
    res.status(500).send('Error getting article')
  }
}

export const getArticleByKeyword = async (req, res) => {
  try {
    const { keyword } = req.params
    const articles = await Article.find({
      title: { $regex: keyword, $options: '$i' },
    })

    await res.json(articles)
  } catch (error) {
    res.status(500).send('Error getting articles')
  }
}
