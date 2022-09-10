import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import AppDataSource from './dataSource'
import routes from './routes'
import uploadConfig from './config/upload'
import AppError from './errors/AppError'
import cors from 'cors'

AppDataSource.initialize()
  .then(() => {
    console.log('🎲 Banco de dado inicializado!')

    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use('/files', express.static(uploadConfig.directory))
    app.use(routes)

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return res
          .status(err.statusCode)
          .json({ status: 'error', message: err.message })
      }

      console.log(err)

      return res
        .status(500)
        .json({ status: 'error', message: 'Internal server error' })
    })

    app.listen(process.env.PORT, () => {
      console.log('🚀 Server started on port 3333!')
    })
  })
  .catch((err) => {
    console.error('Erro ao inicializar o banco de dado!', err)
  })
