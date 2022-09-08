import AppDataSource from '../dataSource'
import User from '../models/User'

const UsersRepository = AppDataSource.getRepository(User)

export default UsersRepository
