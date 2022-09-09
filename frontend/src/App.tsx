/* eslint-disable no-unused-vars */
import React from 'react'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import { AuthProvider } from './context/AuthContext'

export function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        {/* <SignUp /> */}
        <SignIn />
      </AuthProvider>
    </>
  )
}

export default App
