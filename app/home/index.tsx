import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { router } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  TextInput,
  View, Image, TouchableOpacity
} from "react-native";
import { Text } from "@/components/Themed";
import SimpleParkingSpotCard from "@/components/cards/SimpleParkingSpotCard";
import { Link } from "@/components/Themed";
import { SearchInput } from "@/components/ThemedInput";

export default function Home() {
  const bgImage = require("../../assets/auth/pattern.png");

  const parkingSpots = [
    {
      title: "Graha Mall",
      address: "123 Dhaka Street",
      time: "7 min",
      price: "$7",
      image: require("../../assets/auth/mall1.png"),
    },
    {
      title: "Graha Mall",
      address: "123 Dhaka Street",
      time: "7 min",
      price: "$7",
      image: require("../../assets/auth/mall2.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <View style={styles.titleElements}>
            <View style={styles.greetings}>
              <Text style={styles.name}>Hola Diane 👋🏻</Text>
              <Text style={styles.subtitles}>Find an easy parking spot</Text>
            </View>
            <View style={styles.bx} 
        >
             <TouchableOpacity onPress={() => {
          router.push("/Home/categories/Notifications");}}><Image source={require("../../assets/auth/Notification.png")} style={styles.notify} />
          </TouchableOpacity> 
          </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titles}>Categories</Text>
          <View style={styles.imagesElement}>
            <View style={styles.box}>
              <Image source={require("../../assets/auth/car.png")} />
              <Text style={styles.vehicleNames}>Car</Text>
            </View>
            <View style={styles.box}>
              <Image source={require("../../assets/auth/bike.png")} />
              <Text style={styles.vehicleNames}>Bike</Text>
            </View>
            <View style={styles.box}>
              <Image source={require("../../assets/auth/bus.png")} />
              <Text style={styles.vehicleNames}>Bus</Text>
            </View>
            < View style={styles.box}>
              <Image source={require("../../assets/auth/van.png")} />
              <Text style={styles.vehicleNames}>Van</Text>
            </View>
          </View>
          <Link href="/Explore/" style={styles.titles}>Nearst Parking Spaces</Link>
          {parkingSpots.map((spot, index) => (
            <SimpleParkingSpotCard key={index} {...spot} />
          ))}
        </View>
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark.background,
  },
  header: {
    flex: 2,
    width: "100%",
  },
  bg: {
    flex: 1,
    padding: Sizes.lg,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
  },
  text: {
    fontSize: 12,
    color: "#2D2D2D",
    opacity: 0.4,
  },
  primaryText: {
    color: Colors.light.primary,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.dark.background,
    paddingVertical: Sizes.md,
    borderRadius: Sizes.md,
    marginBottom: Sizes.lg,
  },
  btnText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
  },
  form: {
    flex: 5,
    width: "100%",
    position: "relative",
    backgroundColor: Colors.light.background,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingVertical: Sizes.sm + 40,
    paddingHorizontal: Sizes.lg,
  },
  bx: {
    backgroundColor: "#2A344E",
    width: 44,
    height: 44,
    borderRadius: 10,
    marginTop: 20,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  images: {
    marginTop: 20,
  },
  input: {
    width: "100%",
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.md3x,
    fontSize: Sizes.md3x,
    marginBottom: Sizes.md3x,
    borderRadius: Sizes.md,
    backgroundColor: Colors.white,
    color: Colors.light.text,
  },
  inputField: {
    width: 311,
    height: 55,
    backgroundColor: "#2A344E",
    borderRadius: Sizes.md,
    padding: 15,
    marginTop: 20,
  },
  subtitles: {
    color: "#FFFFFF",
    opacity: 0.5,
    fontSize: 16,
  },
  notify: {
    margin: 11,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 28,
  },
  titleElements: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,

  },
  greetings: {
    marginRight: 120,
    marginTop: 15,

  },
  icon: {
    marginTop: 15,
  },
  imagesElement: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    flexDirection: "column",
    justifyContent: "center",
    width: 67,
    height: 73,
    padding: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 40,
  },
  vehicleNames: {
    marginTop: 10,
  },
  titles: {
    marginBottom: Sizes.md3x,
    color: "#0A1124",
  },
  card1: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
  },
  timeButton: {
    backgroundColor: "#FFF3F3",
    color: "#F43939",
    opacity: 0.8,
    fontSize: 12,
    borderRadius: 15,
    textAlign: "center",
    padding: 4,
    width: 59,
    height: 26,
  },
  details: {
    marginTop: 15,
  },
  title1: {
    color: "#2D2D2D",
    fontSize: 18,
  },
  title2: {
    color: "#2D2D2D",
    fontSize: 14,
    marginBottom: 15,
    opacity: 0.5,
  },
  title3: {
    color: "#F43939",
    fontSize: 20,
  },
  span: {
    fontSize: 12,
  },
  place: {
    color: "#FFFFFF",
    opacity: 0.4,
    fontSize: 16,
    marginLeft: 60,
  },
  icons: {
    marginRight: 20,
  }
});
