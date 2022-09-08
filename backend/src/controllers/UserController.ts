import { Request, Response } from 'express'
import UsersRepository from '../repositories/UsersRepository'
import CreateUserService from '../services/CreateUserService'

import UpdateUserAvatarService from '../services/UpdateUserAvatarService'

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body
    const createUser = new CreateUserService()

    const user = await createUser.execute({ name, email, password })

    // @ts-expect-error
    delete user.password

    return res.status(201).json(user)
  }

  async list(req: Request, res: Response) {
    const usersAll = await UsersRepository.find()

    return res.status(200).json(usersAll)
  }

  async avatar(req: Request, res: Response) {
    const updateUserAvatar = new UpdateUserAvatarService()

    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      avatarFileName: req.file?.filename as string,
    })

    // @ts-expect-error
    delete user.password

    return res.status(200).json(user)
  }
}

export default UserController
