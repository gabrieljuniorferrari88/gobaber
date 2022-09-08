import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth'

import User from '../models/User'
import usersRepository from '../repositories/UsersRepository'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
  token: string
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

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService
