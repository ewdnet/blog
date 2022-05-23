import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import Joi from 'joi'

const { Schema } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, name: this.name }, process.env.SKEY)
  return token
}

const User = mongoose.model('User', UserSchema)

const validate = user => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
  return schema.validate(user)
}

export { User, validate }
