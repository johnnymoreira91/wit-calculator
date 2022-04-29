import { Request, Response } from 'express'
import { Logger } from '@models/Logger'

export default {
  async getAll(req: Request<{ id: string }, {}, {}>, res: Response) {
    res.set('Content-operation', '+/plus')
    res.set('Content-id', req.id)
    req.operation = 'validation'
    try {
      const { id } = req.params
      const loggers = await Logger.findOne({id: id})
      if (!loggers) {
        return res.status(404).json('Any log Found!')
      }
      req.result = `Validate result = ${loggers.result}`
      return res.status(200).json({
        operation: loggers.operation,
        result: loggers.result
      })
    } catch (error) {
      req.result = 'Error to find loggers'
      return res.status(400).json('Error to find loggers')
    }
  },

}
