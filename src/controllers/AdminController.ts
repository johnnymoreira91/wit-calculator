import { Request, Response } from 'express'
import { Logger } from '@models/Logger'

export default {
  async getAll (req: Request<{}, {}, {}>, res: Response) {
    res.set('Content-operation', 'importCsv')
    res.set('Content-id', req.id)
    req.operation = 'logger'
    try {
      const logger = await Logger.find({})
      if (!logger) {
        req.result = 'Any logger Found!'
        return res.status(404).json('Any logger Found!')
      }
      return res.status(200).json(logger)
    } catch (error) {
      req.result = 'Error to find logger'
      return res.status(400).json('Error to find logger')
    }
  },

}
