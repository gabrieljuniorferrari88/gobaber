import express from 'express'
import AppDataSource from './dataSource'
import routes from './routes'
import uploadConfig from './config/upload'

AppDataSource.initialize()
  .then(() => {
    console.log('Banco de dado inicializado!')

    const app = express()

    app.use(express.json())
    app.use('/files', express.static(uploadConfig.directory))
    app.use(routes)

    app.listen(process.env.PORT, () => {
      console.log('🚀 Server started on port 3333!')
    })
  })
  .catch((err) => {
    console.error('Erro ao inicializar o banco de dado!', err)
  })
