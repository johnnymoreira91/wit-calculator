declare namespace Express {
  export interface Request {
      operation: string,
      time: number
  }
  export interface Response {
    time: number
}
}