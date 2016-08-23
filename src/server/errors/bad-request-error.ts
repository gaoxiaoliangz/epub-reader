import GenericError from './generic-error'

export default class BadRequestError extends GenericError {
  code: number

  constructor(message, code?) {
    super(message)

    this.name = 'BadRequestError'
    this.statusCode = 400

    if (code) {
      this.code = code
    }
  }
}