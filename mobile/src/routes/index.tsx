import { ActivityIndicator, View } from 'react-native'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

import { useAuth } from '../hooks/auth'
import { RFValue } from 'react-native-responsive-fontsize'

export function Routes() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#312e38',
        }}
      >
        <ActivityIndicator size={RFValue(60)} color="#999" />
      </View>
    )
  }
  return user ? <AppRoutes /> : <AuthRoutes />
}
