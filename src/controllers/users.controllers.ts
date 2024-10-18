import { Request, Response } from 'express'
import { USERS_MESSAGES } from '~/constants/messages'
import usersService from '~/services/users.services'

export const registerController = async (req: Request, res: Response) => {
  const result = await usersService.register(req.body)
  return res.json({
    message: USERS_MESSAGES.REGISTER_SUCCESS,
    result
  })
}
