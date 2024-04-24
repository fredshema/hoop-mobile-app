import { Icon } from "@/components/Icon";
import { Link, Text } from "@/components/Themed";
import { SearchInput } from "@/components/ThemedInput";
import SimpleParkingSpotCard from "@/components/cards/SimpleParkingSpotCard";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import client  from "../../Utils/AppwriteClient";
import React, {useState,useEffect} from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Account } from "react-native-appwrite/src";

export default function Home() {
  const bgImage = require("@/assets/auth/pattern.png");
  const[name, setName]=useState("");
  
  const account = new Account(client);
  useEffect(()=>{
    isLoggedIn();
  },[])
  const isLoggedIn=async()=>{
    try{
      var x=await account.get();
      setName(x.name);
    }
catch(e){
  console.log(e);
}
  }
  const parkingSpots = [
    {
      title: "Graha Mall",
      address: "123 Dhaka Street",
      time: "7 min",
      price: "$7",
      image: require("@/assets/auth/mall1.png"),
    },
    {
      title: "Graha Mall",
      address: "123 Dhaka Street",
      time: "7 min",
      price: "$7",
      image: require("@/assets/auth/mall2.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <View style={styles.titleElements}>
            <View style={styles.greetings}>
              <Link href="/profile/" style={styles.name}>
                Hola {name} 👋🏻
              </Link>
              <Text style={styles.subtitles}>Find an easy parking spot</Text>
            </View>
            <View style={styles.bx}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/home/categories/notifications");
                }}
              >
                <Image
                  source={require("@/assets/auth/Notification.png")}
                  style={styles.notify}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <SearchInput placeholder="Search" style={styles.search} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titles}>Categories</Text>
          <View style={styles.imagesElement}>
            <Pressable
              style={styles.box}
              onPress={() => {
                router.push("/home/categories/details");
              }}
            >
              <Icon name="car" />
              <Text style={styles.vehicleNames}>Car</Text>
            </Pressable>
            <Pressable
              style={styles.box}
              onPress={() => {
                router.push("/home/categories/details");
              }}
            >
              <Icon name="bike" />
              <Text style={styles.vehicleNames}>Bike</Text>
            </Pressable>
            <Pressable
              style={styles.box}
              onPress={() => {
                router.push("/home/categories/details");
              }}
            >
              <Icon name="bus" />
              <Text style={styles.vehicleNames}>Bus</Text>
            </Pressable>
            <Pressable
              style={styles.box}
              onPress={() => {
                router.push("/home/categories/details");
              }}
            >
              <Icon name="van" />
              <Text style={styles.vehicleNames}>Van</Text>
            </Pressable>
          </View>
          <Link href="/home/explore" style={styles.titles}>
            Nearst Parking Spaces
          </Link>
          {parkingSpots.map((spot, index) => (
            <SimpleParkingSpotCard
              key={index}
              {...spot}
              onPress={() => {
                router.push("/parking/details");
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark.background,
  },
  search: {
    backgroundColor: Colors.light.lightGray,
    marginTop: Sizes.xl5x,
  },
  header: {
    flex: 4,
    width: "100%",
  },
  bg: {
    flex: 1,
    paddingVertical: Sizes.sm,
    paddingHorizontal: Sizes.lg,
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
    flex: 7,
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
  imagesElement: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Sizes.md,
  },
  box: {
    flex: 1,
    height: 73,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Sizes.sm,
    marginBottom: Sizes.xl2x,
  },
  vehicleNames: {
    marginTop: Sizes.sm,
  },
  titles: {
    fontSize: Sizes.md3x,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: Sizes.sm,
  },
});
