module.exports.HttpError = class HttpError extends Error {
  constructor (status, ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError)
    }

    this.name = 'HttpError'
    this.status = status
  }
}

module.exports.errorHandler = function errorHandler (error, request, response, next) {
  response.status(error.status || 500).json({ error: error.message })
}

module.exports.asyncHandler = fn => (request, response, next) => Promise.resolve(fn(request, response, next)).catch(next)
