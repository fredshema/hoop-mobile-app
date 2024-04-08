import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { useRoute } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  return (
    <View style={[styles.container, {}]}>
      <StatusBar style="dark" />
      <Stack
        initialRouteName="form"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.light["secondary-background"],
            paddingTop: insets.top,
            paddingHorizontal: Sizes.md,
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light["secondary-background"],
  },
});
