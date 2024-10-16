import { config } from 'dotenv'
import { Collection, Db, MongoClient } from 'mongodb'
import UserModel from '~/models/schemas/User.schema'
config()

const uri = process.env.MONGODB_URL ?? ''

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log('Error', error)
      throw error
    }
  }

  get users(): Collection<UserModel> {
    return this.db.collection('users')
  }
}

// Tạo object từ class DatabaseService
const databaseService = new DatabaseService()
export default databaseService
