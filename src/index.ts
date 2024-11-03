import { config } from 'dotenv'
import express from 'express'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import { envConfig } from './constants/config'
import mediasRouter from './routes/medias.routes'
import { initFolder } from './utils/file'
config()
databaseService.connect()

const app = express()
app.use(express.json())
const port = envConfig.port || 3000

initFolder()

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
