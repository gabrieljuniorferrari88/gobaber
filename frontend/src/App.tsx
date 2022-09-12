/* eslint-disable no-unused-vars */
import GlobalStyle from './styles/global'
import AppProvider from './hooks'
import Rotas from './routes'

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Rotas />
      </AppProvider>
    </>
  )
}

export default App
