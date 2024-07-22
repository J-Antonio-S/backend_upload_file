import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRouter from './routes/index.routes.js'
import fileRouter from './routes/file.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(indexRouter)
app.use(fileRouter)

export default app
