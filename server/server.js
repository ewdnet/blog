import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import auth from './routes/auth.js'
import users from './routes/users.js'
import routeArticle from './routes/article.js'
import routeComment from './routes/comment.js'
import routeTag from './routes/tag.js'

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MGDB, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to MongoDB.'))

app.use('/api/auth', auth)
app.use('/api/users', users)

app.use('/api', routeArticle)
app.use('/api', routeComment)
app.use('/api', routeTag)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}.`))
