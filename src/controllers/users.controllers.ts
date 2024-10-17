import { Request, Response } from 'express'
import { USERS_MESSAGES } from '~/constants/messages'
import usersService from '~/services/users.services'

export const registerController = async (req: Request, res: Response) => {
  const { email, password, name, date_of_birth } = req.body
  try {
    const result = await usersService.register({ email, password, name, date_of_birth })
    return res.json({
      message: USERS_MESSAGES.REGISTER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register failed',
      error
    })
  }
}
