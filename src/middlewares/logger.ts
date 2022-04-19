import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { Logger } from '@models/Logger'

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
  
    await Logger.create({...obj})
  })
};

export default myLogger
