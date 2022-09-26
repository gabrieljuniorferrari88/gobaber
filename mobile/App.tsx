/* eslint-disable camelcase */
import * as React from 'react'
import { StatusBar } from 'expo-status-bar'

import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab'

import theme from './src/global/styles/theme'
import { Routes } from './src/routes'

import AppProvider from './src/hooks'

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  )
}
