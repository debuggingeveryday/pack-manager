import { Stack } from 'expo-router'
import { Fragment } from 'react'
import { View, Text } from 'react-native'

export default function Trip() {
  return (
    <>
      <Stack.Screen options={{ title: 'Trip' }} />
      <View>
        <Text>Trip</Text>
      </View>
    </>
  )
}
