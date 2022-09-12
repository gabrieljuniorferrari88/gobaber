import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

export const PrivateRoute = () => {
  const { user } = useAuth()

  console.log('isAuth: ', user)

  return user !== null && user !== undefined ? <Outlet /> : <Navigate to="/" />
}
