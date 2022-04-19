import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { Logger } from '@models/Logger'

import fs from 'fs'

export let logger = false
export const toggleLogger = () => {
  logger = !logger
}

const file = fs.createWriteStream('cache.csv', 'utf-8')

var myLogger = async function (req: Request, res: Response, next: NextFunction) {
  let idLogger = uuidv4()
  req.id = idLogger

  const startHrTime = process.hrtime();
  const elapsedHrTime = process.hrtime(startHrTime);
  next();
  res.on('finish', async() => {
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    let obj = {
      id: idLogger,
      ip: req.socket.remoteAddress || req.connection.remoteAddress,
      route: req.url,
      responseTime: elapsedTimeInMs,
      statusCode: res.statusCode,
      operation: req.operation,
      result: req.result
    }
    console.log(obj);

    file.write(Object.values(obj).join('\t') + '\n')
  
    await Logger.create({...obj})
  })
};

export default myLogger
