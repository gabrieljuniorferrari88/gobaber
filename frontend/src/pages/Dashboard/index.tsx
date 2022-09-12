import { useAuth } from '../../hooks/auth'
import { Container } from './styles'

export function Dashboard() {
  const { signOut } = useAuth()

  function handleLogout() {
    signOut()
  }

  return (
    <Container>
      <h1>Dashboard: </h1>
      <button onClick={handleLogout}>sair</button>
    </Container>
  )
}

export default Dashboard
