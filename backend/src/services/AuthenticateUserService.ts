import { compare } from 'bcryptjs'
import User from '../models/User'

import usersRepository from '../repositories/UsersRepository'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
}
class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const user = await usersRepository.findOne({ where: { email } })

    if (!user) {
      throw new Error(`Os dados email/senha estão errados!`)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new Error(`Os dados email/senha estão errados!`)
    }

    return {
      user,
    }
  }
}

export default AuthenticateUserService
