import { Router } from 'express'
import multer from 'multer'

import UserController from '../controllers/UserController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import uploadConfig from '../config/upload'

const usersRouter = Router()

const upload = multer(uploadConfig)

usersRouter.post('/', new UserController().create)
usersRouter.get('/', new UserController().list)
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  new UserController().avatar,
)

export default usersRouter
