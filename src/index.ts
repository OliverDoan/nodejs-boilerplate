import { config } from 'dotenv'
import express from 'express'
import { envConfig } from './constants/config'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import mediasRouter from './routes/medias.routes'
import staticRouter from './routes/static.routes'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import { initFolder } from './utils/file'
config()
databaseService.connect()

const app = express()
app.use(express.json())
const port = envConfig.port || 3000

initFolder()

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
// Cách 1
// app.use('/static', express.static(UPLOAD_DIR))

// Các 2
app.use('/static', staticRouter)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
