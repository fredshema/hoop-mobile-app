import LayoutHeader from "@/components/LayoutHeader";
import { Text } from "@/components/Themed";
import Sizes from "@/constants/Sizes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Notification from "./notification";
import Read from "./read";

export default function Notifications() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.content, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />
      <LayoutHeader title="Notification" />
      <Text style={styles.title}>Today</Text>
      <Notification />
      <Notification />
      <Read />
      <Text style={styles.title}>June 12, 2021</Text>
      <Read />
      <Notification />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Sizes.lg,
  },
  title: {
    fontSize: Sizes.md3x,
    marginBottom: Sizes.md,
    marginTop: Sizes.lg,
  },
});
