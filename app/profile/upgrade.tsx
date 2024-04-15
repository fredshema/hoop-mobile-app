import { Icon } from "@/components/Icon";
import LayoutHeader from "@/components/LayoutHeader";
import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Upgrade() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <StatusBar style="dark" />
      <LayoutHeader
        title="Upgrade"
        onBackPress={() => {
          router.back();
        }}
      />
      <View style={styles.card}>
        <Text style={styles.titles}>
          Get all the facilities by upgrading your account
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.card1}>
          <Text style={styles.title}>Pro</Text>
          <View style={styles.icons}>
            <Icon name="tick" />
            <Text style={styles.subtitle}>All Include</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="tick" />
            <Text style={styles.subtitle}>Unlimited Feature</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="tick" />
            <Text style={styles.subtitle}>Discounts every reservation</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="tick" />
            <Text style={styles.subtitle}>All Include</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="tick" />
            <Text style={styles.subtitle}>All Include</Text>
          </View>
          <View style={styles.icons}>
            <Icon name="tick" />
            <Text style={styles.subtitle}>All Include</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.push("/profile/plan");
          }}
        >
          <Text style={styles.btnText}>Choose a Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.lg,
    backgroundColor: Colors.light["secondary-background"],
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.sm,
    marginTop: Sizes.md3x,
  },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.xl,
    textAlign: "center",
    marginTop: Sizes.md4x,
    marginBottom: Sizes.sm,
  },
  subtitle: {
    flex: 1,
  },
  titles: {
    fontSize: Sizes.xl2x,
    textAlign: "center",
    maxWidth: 270,
    marginVertical: Sizes.xl3x,
  },
  card1: {
    backgroundColor: Colors.white,
    padding: Sizes.md3x,
    width: 270,
    borderRadius: Sizes.md3x,
    marginBottom: Sizes.xl2x,
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
  },
  words: {
    marginRight: 123,
  },
  word: {
    marginRight: 68,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 2,
  },
  btnText: {
    color: Colors.dark.text,
    textAlign: "center",
    marginTop: 15,
    fontSize: Sizes.md3x,
  },
  btn: {
    backgroundColor: "#130F26",
    borderRadius: 15,
    width: 311,
    height: 60,
  },
});
