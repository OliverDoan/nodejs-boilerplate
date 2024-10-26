import { JwtPayload } from 'jsonwebtoken'
import { TokenType, UserVerifyStatus } from '~/constants/enum'

export interface RegisterRequest {
  name: string
  email: string
  password: string
  date_of_birth: string
}

export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
  verify: UserVerifyStatus
}

export interface UpdateMeReqBody {
  name?: string
  date_of_birth?: string
  avatar?: string
  cover_photo?: string
}
