import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
    </Stack>
  );
}
