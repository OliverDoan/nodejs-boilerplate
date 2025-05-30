import { TokenType } from '~/constants/enum'
import User from '~/models/database/User'
import { RegisterReqBody } from '~/models/requests/User.requests'
import databaseService from '~/services/database.services'
import { hashPassword } from '~/utils/crypto'
import { signToken } from '~/utils/jwt'

class UsersService {
  async register(payload: RegisterReqBody) {
    const result = await databaseService.users.insertOne(
      new User({
        ...payload,
        password: hashPassword(payload.password)
      })
    )
    const user_id = result.insertedId.toString()
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])
    return {
      access_token,
      refresh_token
    }
  }

  async checkEmailExist(email: string) {
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }

  private signAccessToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.AccessToken,
        options: {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        }
      }
    })
  }

  private signRefreshToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.RefreshToken,
        options: {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
        }
      }
    })
  }
}

const usersService = new UsersService()
export default usersService
