/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import ToastContainer from '../components/ToastContainer'

interface ToastProviderProps {
  children: React.ReactNode
}

export interface ToastMessage {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
  map?: string
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void
  removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

function ToastProvider({ children }: ToastProviderProps) {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid()

      const toast = {
        id,
        type,
        title,
        description,
      }

      setMessages((state) => [...state, toast])
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
export { ToastProvider, useToast }