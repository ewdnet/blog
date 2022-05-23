import bcrypt from 'bcrypt'
import Joi from 'joi'
import { User } from '../models/users.js'

export const loginUser = async (req, res) => {
  try {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Invalid email')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Invalid password')

    const token = user.generateAuthToken()
    res.send(token)
  } catch (error) {
    console.log(error)
    res.send('An error occured')
  }
}

const validate = user => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
  return schema.validate(user)
}
