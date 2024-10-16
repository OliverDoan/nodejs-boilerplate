import { config } from 'dotenv'
import express from 'express'
import databaseService from './services/database.services'
config()

const app = express()
const port = process.env.PORT || 3000

databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
