declare namespace Express {
  export interface Request {
      id: string,
      operation: string,
      result: string
  }
  export interface Response {
    time: number
}
}