/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../services/api'

interface AuthState {
  token: string
  user: object
}

interface SignInCredentials {
  email: string
  password: string
}

interface SignInTest {
  email: string
  password: string
}

interface AuthContextProps {
  user: object
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@GoBarber:token',
        '@GoBarber:user',
      ])

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) })
      }
    }

    loadStorageData()
  }, [])

  const signIn = useCallback(async ({ email, password }: SignInTest) => {
    const response = await api.post('sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    await AsyncStorage.setItem('@GoBarber:token', token)
    await AsyncStorage.setItem('@GoBarber:user', JSON.stringify(user))

    await AsyncStorage.multiSet([
      ['@GoBarber:token', token],
      ['@GoBarber:user', JSON.stringify(user)],
    ])

    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:token', '@GoBarber:user'])

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an authProvider')
  }

  return context
}

export { AuthProvider, useAuth }
