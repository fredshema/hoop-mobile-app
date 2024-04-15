import { Icon } from "@/components/Icon";
import LayoutHeader from "@/components/LayoutHeader";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function BookingDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LayoutHeader
          title="Book Details"
          onBackPress={() => {
            router.back();
          }}
        />
      </View>
      <View style={styles.images}>
        <Image source={require("@/assets/auth/mall.png")} />
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Graha Mall</Text>
          <Text style={styles.bodyMessage}>123 Dhaka Street</Text>
        </View>
        <Text style={styles.background}>$10/h</Text>
      </View>
      <View style={styles.icons}>
        <View style={styles.card1}>
          <View style={styles.grd}>
            <Icon name="location" />
          </View>
          <Text style={styles.numbers}>A-6</Text>
          <Text style={styles.text}>Parking Place</Text>
        </View>
        <View style={styles.card2}>
          <View style={styles.grd}>
            <Icon name="time-circle" />
          </View>
          <Text style={styles.numbers}>4 h</Text>
          <Text style={styles.text}>Time</Text>
        </View>
      </View>
      <View style={styles.rectangle}>
        <View style={styles.ground}>
          <Image source={require("@/assets/auth/insurance.png")} />
        </View>
        <Text style={styles.txt}>Include Insurance</Text>
        <Text style={styles.hour}>$5/h</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.price}>$35,00</Text>
        <PrimaryButton
          label="Pay"
          style={styles.btn}
          onPress={() => {
            router.push("/payment/payment");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: Sizes.sm3x,
    color: "#2D2D2D",
    opacity: 0.4,
  },
  txt: {
    fontSize: Sizes.md2x,
    marginRight: 30,
    marginTop: 5,
  },
  hour: {
    fontSize: Sizes.md,
    marginTop: 5,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  price: {
    fontSize: Sizes.xl,
    marginTop: 10,
    color: "#2D2D2D",
    fontWeight: "bold",
  },
  numbers: {
    fontSize: Sizes.md2x,
    color: "#2D2D2D",
  },
  header: {
    paddingLeft: 30,
    marginBottom: 10,
  },
  rectangle: {
    backgroundColor: Colors.dark.text,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 311,
    height: 61,
    padding: 10,
    margin: 35,
    borderRadius: 15,
  },
  bodyMessage: {
    color: "#2D2D2D",
    opacity: 0.4,
    marginBottom: 30,
  },
  Btitle: {
    color: "#2D2D2D",
    fontSize: Sizes.md3x,
    textAlign: "center",
    marginBottom: Sizes.sm,
  },
  ground: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.lightDanger,
    width: 41,
    height: 41,
    paddingLeft: 10,
    paddingTop: 5,
    borderRadius: 8,
  },
  grd: {
    backgroundColor: Colors.light.lightDanger,
    borderRadius: 8,
    padding: Sizes.sm,
    marginBottom: Sizes.sm,
  },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    marginTop: Sizes.lg,
    marginBottom: Sizes.sm,
  },
  texts: {
    marginLeft: 20,
    color: "#2D2D2D",
    fontSize: Sizes.md3x,
  },
  background: {
    width: 72,
    backgroundColor: Colors.light.lightDanger,
    color: Colors.light.danger,
    height: 38,
    padding: Sizes.sm,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    borderRadius: Sizes.vsm,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  images: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: Sizes.lg,
  },
  btnText: {
    color: Colors.dark.text,
    textAlign: "center",
    marginTop: 15,
    fontSize: Sizes.md,
  },
  btn: {
    width: "50%",
  },
  card1: {
    width: 145,
    height: 126,
    backgroundColor: Colors.dark.text,
    marginRight: 20,
    borderRadius: Sizes.md3x,
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    width: 145,
    height: 126,
    backgroundColor: Colors.dark.text,
    borderRadius: Sizes.md3x,
    justifyContent: "center",
    alignItems: "center",
  },
});
