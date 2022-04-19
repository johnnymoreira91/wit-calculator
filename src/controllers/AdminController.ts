import { Request, Response } from 'express'
import { Logger } from '@models/Logger'

export default {
  async getAll (req: Request<{}, {}, {}>, res: Response) {
    try {
      const logger = await Logger.find({})
      if (!logger) {
        return res.status(404).json('Any Admin Found!')
      }
      return res.status(200).json(logger)
    } catch (error) {
      return res.status(400).json('Error to find logger')
    }
  },

}
