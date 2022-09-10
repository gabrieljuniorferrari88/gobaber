/* eslint-disable no-unused-vars */
import React from 'react'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ToastContainer from './components/ToastContainer'
import AppProvider from './hooks'

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        {/* <SignUp /> */}
        <SignIn />
      </AppProvider>
    </>
  )
}

export default App
