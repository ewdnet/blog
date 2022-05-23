import mongoose from 'mongoose'
const { Schema } = mongoose

const CommentSchema = new Schema({
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
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  },
})

CommentSchema.pre('find', function (next) {
  this.populate('article')
  next()
})

const Comment = mongoose.model('Comment', CommentSchema)
export default Comment
