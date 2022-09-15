import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { NavigationContainer } from '@react-navigation/native'

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#312e38' },
        }}
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  )
}
