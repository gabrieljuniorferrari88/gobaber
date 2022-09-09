/* eslint-disable no-unused-vars */
import React from 'react'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SignUp />
    {/* <SignIn /> */}
  </>
)

export default App
