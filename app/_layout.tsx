import { useThemeColor } from "@/components/Themed";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Avenir: require("../assets/fonts/Avenir-Regular.otf"),
  });

  React.useEffect(() => {
    if (error) throw error;
  }, [error]);

  React.useEffect(() => {
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
  const backgroundColor = useThemeColor({}, "background");
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <StatusBar style="inverted" />
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor },
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}
