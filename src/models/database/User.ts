import { ObjectId } from 'mongodb'

interface IUser {
  _id?: ObjectId
  email: string
  password: string
  created_at?: Date
  updated_at?: Date
}

export default class User {
  _id?: ObjectId
  email: string
  password: string
  created_at: Date
  updated_at: Date

  constructor(user: IUser) {
    const date = new Date()

    this._id = user._id
    this.email = user.email
    this.password = user.password
    this.created_at = user.created_at || date
    this.updated_at = user.updated_at || date
  }
}
