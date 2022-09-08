import { Router } from 'express'

import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router()

sessionsRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body

    const authenticateUser = new AuthenticateUserService()

    const { user } = await authenticateUser.execute({ email, password })

    // @ts-expect-error
    delete user.password

    return res.status(201).json({ user })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
})

export default sessionsRouter
