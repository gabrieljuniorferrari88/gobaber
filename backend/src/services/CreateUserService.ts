import User from '../models/User'
import usersRepository from '../repositories/UsersRepository'

interface Request {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    })

    if (checkUserExists) {
      throw new Error('Email já cadastrando!')
    }

    const user = usersRepository.create({
      name,
      email,
      password,
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService
