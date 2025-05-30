import express from 'express'
import { ContextRunner, validationResult } from 'express-validator'

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

    res.status(400).json({ errors: errors.mapped() })
  }
}
