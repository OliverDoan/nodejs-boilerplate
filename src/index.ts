import { config } from 'dotenv'
import express, { Request, Response, NextFunction } from 'express'
import databaseService from './services/database.services'
import usersRouter from './routes/users.routes'
config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

databaseService.connect()
app.use('/users', usersRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ error: err.message })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
