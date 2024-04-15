import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ParkingLayout() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
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
        <Stack.Screen
          name="map"
          options={{
            contentStyle: {
              paddingTop: 0,
              paddingBottom: 0,
              backgroundColor: Colors.light.background,
            },
          }}
        />
      </Stack>
    </>
  );
}
