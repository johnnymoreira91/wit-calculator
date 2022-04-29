import fs from 'fs'
import { Logger } from '@models/Logger'

export let logger = false
export let cron = '10 * * * *'
export const toggleLogger = () => {
  logger = !logger
}

const file = fs.createWriteStream('logs/cache.csv', 'utf-8')

export default async function saveLog() {
  try {
    let logs = await Logger.find({})
    file.write(Object.values(logs).join('\t') + '\n')
    return {
      message: 'log saved',
      date: new Date()
    }
  } catch (error) {
    return error
  }
}