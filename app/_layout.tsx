import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Avenir: require("../assets/fonts/Avenir-Regular.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutScreen />;
}

function RootLayoutScreen() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </SafeAreaProvider>
  );
}
