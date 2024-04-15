import LayoutHeader from "@/components/LayoutHeader";
import { Text } from "@/components/Themed";
import { LightButton, PrimaryButton } from "@/components/ThemedButton";
import { TextInput } from "@/components/ThemedInput";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Edit() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />
      <LayoutHeader
        title="Edit Profile"
        onBackPress={() => {
          router.back();
        }}
      />

      <View style={styles.images}>
        <Image source={require("@/assets/auth/edit-profile.png")} />
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput value="Echa" />
        </View>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Type</Text>
            <TextInput value="Car Sport" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>ID</Text>
            <TextInput value="C68721" />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Address</Text>
          <TextInput value="Address" />
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.btns}>
          <LightButton label="Cancel" style={{ width: "50%" }} />
          <PrimaryButton label="Save" style={{ width: "50%" }} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.lg,
  },
  label: {
    color: Colors.light.muted,
    fontSize: Sizes.md,
  },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    textAlign: "center",
  },
  form: {
    flex: 1,
    marginVertical: Sizes.lg,
  },
  layout: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    gap: Sizes.sm,
  },
  cancel: {
    width: 146,
    height: 60,
    backgroundColor: "#EAEAF3",
    borderRadius: Sizes.sm1x,
    marginRight: 20,
  },
  save: {
    width: 146,
    height: 60,
    backgroundColor: "#130F26",
    borderRadius: Sizes.sm1x,
  },
  icon: {
    width: 16,
    height: 16,
  },
  minInput: {
    width: 146,
    height: 60,
    backgroundColor: Colors.dark.text,
    borderRadius: Sizes.sm1x,
    padding: 10,
    marginBottom: 20,
    marginRight: 20,
  },
  inputText: {
    width: 311,
    height: 54,
    backgroundColor: Colors.dark.text,
    borderRadius: Sizes.sm1x,
    padding: 10,
    marginBottom: 20,
  },
  images: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  btns: {
    flexDirection: "row",
    gap: Sizes.sm,
    width: "100%",
  },
  txtCancel: {
    textAlign: "center",
    paddingTop: 10,
    color: "#2D2D2D",
    opacity: 0.5,
    fontSize: Sizes.md3x,
  },
  txtSave: {
    textAlign: "center",
    paddingTop: 10,
    color: Colors.dark.text,
    fontSize: Sizes.md3x,
  },
});
