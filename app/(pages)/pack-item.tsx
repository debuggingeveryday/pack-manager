import { Stack } from 'expo-router'
import { Fragment } from 'react'
import { View } from 'react-native'

export default function PackItems() {
  return (
    <>
      <Stack.Screen options={{ title: 'Pack Items' }} />
      <View>
        <h1>Pack Items</h1>
      </View>
    </>
  )
}
