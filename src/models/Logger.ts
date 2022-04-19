import mongoose from '../database'

interface LoggerInterface {
  id: string,
  ip: string,
  route: string,
  responseTime: number,
  statusCode: number,
  createdAt: Date
}

// Schema
const schema = new mongoose.Schema<LoggerInterface>({
  id: { type: String, required: true },
  ip: { type: String, required: true },
  route: { type: String, required: true },
  responseTime: { type: Number, required: true },
  statusCode: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
})


const Logger = mongoose.model('Logger', schema)

export { Logger }