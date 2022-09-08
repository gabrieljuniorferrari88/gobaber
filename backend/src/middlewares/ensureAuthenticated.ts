import { Request, Response, NextFunction, request } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '../config/auth'

interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new Error('JWT token está ausente ou não existe!')
  }

  const [, token] = authHeader.split(' ')

  const { secret } = authConfig.jwt

  try {
    const decoded = verify(token, secret)

    const { sub } = decoded as TokenPayload

    request.user = {
      id: sub,
    }

    return next()
  } catch {
    throw new Error('Inválido JWT token!')
  }
}
