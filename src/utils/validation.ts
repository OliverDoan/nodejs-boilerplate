import { validationResult, ContextRunner } from 'express-validator'
import express from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { EntityError, ErrorWithStatus } from '~/models/Errors'
export const validate = (validations: ContextRunner[]) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Run all validations
    for (const validation of validations) {
      await validation.run(req)
    }

    // Collect all errors after running validations
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    // Initialize EntityError with an empty errors object
    const entityError = new EntityError({ errors: {} })
    const errorsObject = errors.mapped()

    for (const key in errorsObject) {
      const { msg } = errorsObject[key]
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        return next(msg)
      }
      entityError.errors[key] = errorsObject[key]
    }

    next(entityError)
  }
}
