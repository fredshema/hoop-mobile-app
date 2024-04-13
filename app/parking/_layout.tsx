import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ParkingLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingTop: insets.top, paddingBottom: insets.bottom },
      }}
    >
      <Stack.Screen
        name="tracking"
        options={{
          contentStyle: { paddingTop: 0, paddingBottom: 0 },
        }}
      />
      <Stack.Screen
        name="route"
        options={{
          contentStyle: { paddingTop: 0, paddingBottom: 0 },
        }}
      />
    </Stack>
  );
}
