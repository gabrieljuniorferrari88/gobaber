import { Router } from 'express'

import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router()

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body

  const authenticateUser = new AuthenticateUserService()

  const { user, token } = await authenticateUser.execute({ email, password })

  // @ts-expect-error
  delete user.password

  return res.status(201).json({ user, token })
})

export default sessionsRouter
