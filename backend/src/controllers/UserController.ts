import { Request, Response } from 'express'
import UsersRepository from '../repositories/UsersRepository'
import CreateUserService from '../services/CreateUserService'

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body
      const createUser = new CreateUserService()

      const user = await createUser.execute({ name, email, password })

      // @ts-expect-error
      delete user.password

      return res.status(201).json(user)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

  async list(req: Request, res: Response) {
    try {
      const usersAll = await UsersRepository.find()

      return res.status(200).json(usersAll)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Erro no servidor' })
    }
  }
}

export default UserController
