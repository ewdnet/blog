import mongoose from 'mongoose'
const { Schema } = mongoose

const CommentSchema = new Schema({
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  },
  author: String,
  content: {
    type: String,
    maxLength: 250,
    minLength: 4,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

// CommentSchema.pre('find', function (next) {
//   this.populate('article')
//   next()
// })

const Comment = mongoose.model('Comment', CommentSchema)
export default Comment
