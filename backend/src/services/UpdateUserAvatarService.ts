/* eslint-disable camelcase */

import path from 'path'
import fs from 'fs'

import uploadConfig from '../config/upload'
import usersRepository from '../repositories/UsersRepository'
import User from '../models/User'

import AppError from '../errors/AppError'

interface Request {
  user_id: string
  avatarFileName: string
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {
    const user = await usersRepository.findOne({
      where: { id: user_id },
    })

    if (!user) {
      throw new AppError(
        'Somente usuários autenticados podem mudar de avatar!',
        401,
      )
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath)
      }
    }

    user.avatar = avatarFileName

    await usersRepository.save(user)

    return user
  }
}

export default UpdateUserAvatarService
