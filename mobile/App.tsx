import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
// import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import AuthRoutes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent />
      <AuthRoutes />
    </NavigationContainer>
  )
}
