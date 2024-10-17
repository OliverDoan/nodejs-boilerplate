import { ObjectId } from 'mongodb'

enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned // bị khóa
}

interface IUser {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  verify?: UserVerifyStatus
}

export default class User {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  verify: UserVerifyStatus

  constructor(user: IUser) {
    this._id = user._id
    this.name = user.name || ''
    this.email = user.email
    this.date_of_birth = user.date_of_birth || new Date()
    this.password = user.password
    this.verify = user.verify || UserVerifyStatus.Unverified
  }
}
