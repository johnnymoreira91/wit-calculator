/* eslint-disable no-path-concat */
import express, { Request, Response } from 'express'
import AdminRoute from './routes/AdminRoute'
import calculatorRoute from './routes/calculatorRoute'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import myLogger from './middlewares/logger'
import responseTime from 'response-time'
dotenv.config()

const app = express()

app.use(myLogger)
app.use(express.json())
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/admin', AdminRoute)
app.use('/calculator', calculatorRoute)

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

export default app
