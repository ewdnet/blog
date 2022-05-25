import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 144,
    minLength: 4,
  },
  cover: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

// ArticleSchema.pre('find', function (next) {
//   this.populate('tags').populate('comments')
//   next()
// })

const Article = mongoose.model('Article', ArticleSchema)
export default Article
