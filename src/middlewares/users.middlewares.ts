import { checkSchema, ParamSchema } from 'express-validator'
import databaseService from '~/services/database.services'
import { validate } from '~/utils/validate'

const passwordSchema: ParamSchema = {
  notEmpty: {
    errorMessage: 'Password is required'
  },
  isString: {
    errorMessage: 'Password must be a string'
  },
  isLength: {
    options: {
      min: 6,
      max: 50
    },
    errorMessage: 'Password length must be from 6 to 50'
  },
  isStrongPassword: {
    options: {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    },
    errorMessage:
      'Password must be 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol'
  }
}

export const loginValidator = validate(
  checkSchema({
    email: {
      isEmail: {
        errorMessage: 'Email is invalid'
      },
      trim: true,
      custom: {
        options: async (value, { req }) => {
          const user = await databaseService.users.findOne({
            email: value,
            password: req.body.password
          })
          if (user === null) {
            throw new Error('Email or password is incorrect')
          }
          req.user = user
          return true
        }
      }
    },
    password: passwordSchema
  })
)

export const registerValidator = validate(
  checkSchema(
    {
      email: {
        notEmpty: {
          errorMessage: 'Email is required'
        },
        isEmail: {
          errorMessage: 'Email is invalid'
        },
        trim: true
      },
      password: passwordSchema
    },
    ['body']
  )
)
