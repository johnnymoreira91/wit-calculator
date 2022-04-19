import { Request, Response } from 'express'
import { Logger } from '@models/Logger'

export default {
  async getAll (req: Request<{}, {}, {}>, res: Response) {
    try {
      const admins = await Logger.find({})
      if (!admins) {
        return res.status(404).json('Any Admin Found!')
      }
      return res.status(200).json(admins)
    } catch (error) {
      return res.status(400).json('Error to find Admins')
    }
  },

}
