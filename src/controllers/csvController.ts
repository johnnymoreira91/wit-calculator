import { Request, Response } from 'express'
import { toggleLogger, logger } from '../middlewares/logger'

export default {
  async store(req: Request<{}, {}, { importCsv: boolean }>, res: Response) {
    try {
      const { importCsv } = req.body
      res.set('Content-operation', 'importCsv')
      res.set('Content-id', req.id)
      req.operation = 'importCsv'

      if (importCsv == null) {
        req.result = logger + ''
        return res.status(404).json({
          importCsv: logger
        })
      }

      toggleLogger()
      req.result = logger + ''
      return res.status(200).json({
        importCsv: importCsv
      })

    } catch (error) {
      return res.status(400).json('Error to change exportCsv')
    }
  },

}
