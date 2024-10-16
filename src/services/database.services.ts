import { config } from 'dotenv'
import { Db, MongoClient } from 'mongodb'
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
}

// Tạo object từ class DatabaseService
const databaseService = new DatabaseService()
export default databaseService
