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
  email_verify_token?: string
  created_at?: Date
  updated_at?: Date
}

export default class User {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  verify: UserVerifyStatus
  email_verify_token: string
  created_at: Date
  updated_at: Date

  constructor(user: IUser) {
    const date = new Date()

    this._id = user._id
    this.name = user.name || ''
    this.email = user.email
    this.date_of_birth = user.date_of_birth || new Date()
    this.password = user.password
    this.verify = user.verify || UserVerifyStatus.Unverified
    this.email_verify_token = user.email_verify_token || ''
    this.created_at = user.created_at || date
    this.updated_at = user.updated_at || date
  }
}
