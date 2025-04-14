import { Stack } from "expo-router";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{
    //     headerShown: false,
    //   }}/>
    // </Stack>
    <Slot />
  )
}
