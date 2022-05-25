import Tag from '../models/tag.js'

export const postTag = async (req, res) => {
  try {
    const { name } = req.body
    const tag = await Tag.create({ name })
    await res.json(tag)
  } catch (error) {
    res.status(500).send('Error posting tag')
  }
}

export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find({})
    await res.json(tags)
  } catch (error) {
    res.status(500).send('Error getting tags')
  }
}

export const getTagById = async (req, res) => {
  try {
    const { id } = req.params
    const tag = await Tag.findById(id).populate('articles')
    await res.json(tag)
  } catch (error) {
    res.status(500).send('Error getting tag')
  }
}
