import { Request, Response } from 'express'
import { toggleLogger, logger, cron } from '../services/importCsv'

export default {
  async store(req: Request<{}, {}, { importCsv: boolean, cronTime: string }>, res: Response) {
    try {
      const { importCsv, cronTime } = req.body
      res.set('Content-operation', 'importCsv')
      res.set('Content-id', req.id)
      req.operation = 'importCsv'

      if (importCsv == null || cronTime == null) {
        req.result = `logger: ${logger} - cron: ${cron}`
        return res.status(404).json({
          importCsv: logger,
          cronTime: cron
        })
      }

      toggleLogger()
      req.result = `logger: ${logger} - cron: ${cron}`
      return res.status(200).json({
        importCsv: importCsv,
        cronTime: cronTime
      })

    } catch (error) {
      return res.status(400).json('Error to change exportCsv')
    }
  },

}
