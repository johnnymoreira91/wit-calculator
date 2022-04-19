import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { Logger } from '@models/Logger'

const fsPromises = require('fs').promises

// let log = []

var myLogger = async function (req: Request, res: Response, next: NextFunction) {
  const startHrTime = process.hrtime();
  const elapsedHrTime = process.hrtime(startHrTime);
  const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
  // let lastId = log[log.length - 1]?.id || 0
  // let id = lastId + 1
  let obj = {
    id: uuidv4(),
    ip: req.socket.remoteAddress || req.connection.remoteAddress,
    route: req.url,
    responseTime: elapsedTimeInMs,
    statusCode: res.statusCode
  }
  console.log(obj);

  await Logger.create({...obj})

  // if (global.logger === true) {
  //   fsPromises.writeFile('log' + '.json', JSON.stringify(obj))
  //     .then(() => {
  //       console.log('JSON saved');
  //     })
  //     .catch(er => {
  //       console.log(er);
  //     });
  // }

  // log.push(obj)
  // fsPromises.writeFile('log' + '.json', JSON.stringify(obj))
  //   .then(() => {
  //     console.log('JSON saved');
  //   })
  //   .catch(er => {
  //     console.log(er);
  //   });

  next();
};

export default myLogger
