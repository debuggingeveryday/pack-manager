import { Stack, Link } from 'expo-router'
import { View, Text } from 'react-native'

import { Container } from '~/components/Container'
import { Button } from '~/components/nativewindui/Button'

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <View className="content-center">
          <View className="mx-5 grid h-screen grid-cols-2 content-center gap-4 pb-28">
            <Link push href="/pack-item" asChild>
              <Button className="h-24 bg-sky-500 text-white">
                <Text className="text-2xl text-white">Pack items</Text>
              </Button>
            </Link>
            <Link push href="/trip" asChild>
              <Button className="h-24 bg-sky-500 text-white">
                <Text className="text-2xl text-white">Trip</Text>
              </Button>
            </Link>
          </View>
        </View>
      </Container>
    </>
  )
}
