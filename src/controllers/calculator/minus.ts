import { Request, Response } from 'express'

export default {

  async store(req: Request<{}, {}, {
    numberOne: string, numberTwo: string
  }>, res: Response) {
    res.header('Content-Type', 'application/json');
    res.set('Content-operation', '-/minus')
    req.operation = '-'
    const { numberOne, numberTwo } = req.body
    try {
      if (/[0-9]/.test(numberOne) && /[0-9]/.test(numberTwo)) {
        let result = Number(numberOne) - Number(numberTwo)
        if (!result) {
          return res.status(400).json('one of numbers is null')
        }
        return res.status(200).json({
          result: result,
          operation: '-'
        })
      } else {
        return res.status(400).json('you put a string, change to number')
      }
    } catch (error) {
      return res.status(400).json('Error to do the count')
    }
  }

}
