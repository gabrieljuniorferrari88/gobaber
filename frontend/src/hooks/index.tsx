import React from 'react'
import { AuthProvider } from './auth'
import { ToastProvider } from './toast'

interface AppProviderProps {
  children: React.ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  )
}

export default AppProvider
