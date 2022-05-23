import Comment from '../models/comment.js'

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
    await res.json(comments)
  } catch (error) {
    res.status(500).send('Error getting comments')
  }
}

export const postComment = async (req, res) => {
  try {
    const { content, article } = req.body
    const comment = await Comment.create({ content, article })
    await res.json(comment)
  } catch (error) {
    res.status(500).send('Error posting comment')
  }
}
