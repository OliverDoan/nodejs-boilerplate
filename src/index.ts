import { config } from 'dotenv'
import express from 'express'
import usersRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'
config()

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

databaseService.connect()

app.use(express.json())
app.use('/users', usersRouter)
