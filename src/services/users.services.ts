import User from '~/models/database/User'
import databaseService from '~/services/database.services'

class UsersService {
  async register(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    return result
  }
}

const usersService = new UsersService()
export default usersService
