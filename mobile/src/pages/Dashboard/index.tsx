import React from 'react'
import { View, Button } from 'react-native'

import { useAuth } from '../../hooks/auth'

export function Dashboard() {
  const { signOut } = useAuth()

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sign out" onPress={signOut} />
    </View>
  )
}

export default Dashboard
