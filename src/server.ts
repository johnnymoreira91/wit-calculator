/* eslint-disable no-path-concat */
import express, { Request, Response } from 'express'
import AdminRoute from './routes/AdminRoute'
import calculatorRoute from './routes/calculatorRoute'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import myLogger from './middlewares/logger'
import nodeCron from 'node-cron'
import saveLog, { cron, logger } from './services/importCsv'
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

nodeCron.schedule(cron, () => {
  console.log('running a task to add log into csv');
  saveLog()
});


if (logger === true) {

}

export default app
