import LayoutHeader from "@/components/LayoutHeader";
import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Payment() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <LayoutHeader
          title="Payment"
          onBackPress={() => {
            router.back();
          }}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.images}>
          <Image source={require("@/assets/auth/mall3.png")} />
        </View>
        <Text style={styles.title}>Graha Mall</Text>
        <Text style={styles.bodyMessage}>123 Dhaka Street</Text>
        <View style={styles.icons}>
          <View style={styles.background}>
            <Image source={require("@/assets/auth/location.png")} />
            <Text style={styles.danger}>A-6</Text>
          </View>
          <View style={styles.background}>
            <Image source={require("@/assets/auth/clock.png")} />
            <Text style={styles.danger}>4 hours</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.txt}>Input voucher code</Text>
        <Text style={styles.use}>Use</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.prices}>
          <Text style={styles.texts}>Sub total</Text>
          <Text>$30,00</Text>
        </View>
        <View style={styles.prices}>
          <Text style={styles.texts}>Insurance</Text>
          <Text>$5,00</Text>
        </View>
        <Text style={styles.line}></Text>
        <View style={styles.prices}>
          <Text style={styles.totalCost}>Total</Text>
          <Text style={styles.totalCost}>$35,00</Text>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.push("/payment/details");
          }}
        >
          <Text style={styles.btnText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.lg,
  },
  bodyMessage: {
    color: Colors.light.muted,
    textAlign: "center",
    marginBottom: 10,
  },
  header: {
    marginBottom: Sizes.md,
  },
  use: {
    color: Colors.light.primary,
  },
  txt: {
    fontSize: Sizes.md2x,
    color: Colors.light.muted,
  },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    textAlign: "center",
    marginTop: Sizes.lg,
  },
  card: {
    backgroundColor: Colors.dark.text,
    marginBottom: Sizes.lg,
    padding: Sizes.md,
    borderRadius: Sizes.sm,
  },
  line: {
    width: "100%",
    height: 0,
    borderWidth: 1,
    borderColor: "#2D2D2D",
    opacity: 0.05,
    marginBottom: Sizes.sm1x,
  },
  prices: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Sizes.sm1x,
  },
  rectangle: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: Sizes.sm,
    padding: Sizes.md,
    marginBottom: Sizes.md,
    backgroundColor: Colors.dark.text,
  },
  texts: {
    color: "#2D2D2D",
    opacity: 0.6,
    fontSize: Sizes.md,
  },
  totalCost: {
    fontWeight: "bold",
    fontSize: Sizes.md2x
  },
  danger: {
    color: Colors.light.danger,
  },
  background: {
    flexDirection: "row",
    padding: Sizes.sm,
    fontSize: Sizes.sm3x,
    borderRadius: Sizes.sm1x,
    columnGap: Sizes.sm,
    backgroundColor: Colors.light.lightDanger,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: Sizes.md,
    marginVertical: Sizes.md,
  },
  images: {
    flexDirection: "row",
    justifyContent: "center",
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
