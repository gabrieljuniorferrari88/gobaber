import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Dashboard } from '../pages/Dashboard'
import { NavigationContainer } from '@react-navigation/native'

export type RootStackParamList = {
  Dashboard: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#312e38' },
        }}
      >
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  )
}
