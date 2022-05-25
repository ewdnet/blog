import mongoose from 'mongoose'
const { Schema } = mongoose

const TagSchema = new Schema({
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
    },
  ],
  name: {
    type: String,
    maxLength: 25,
    minLength: 4,
  },
})

// TagSchema.pre('find', function (next) {
//   this.populate('articles')
//   next()
// })

const Tag = mongoose.model('Tag', TagSchema)
export default Tag
