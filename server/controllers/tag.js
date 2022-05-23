import Tag from '../models/tag.js'

export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find({}).populate('articles')
    await res.json(tags)
  } catch (error) {
    res.status(500).send('Error getting tags')
  }
}

export const postTag = async (req, res) => {
  try {
    const { name } = req.body
    const tag = await Tag.create({ name })
    await res.json(tag)
  } catch (error) {
    res.status(500).send('Error posting tag')
  }
}
