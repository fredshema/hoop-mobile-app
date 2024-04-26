import { Text } from "@/components/Themed";
import React, { useEffect, useState } from "react";
import {DATABASE_ID, COLLECTION_ID} from "@env";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import { Databases, ID, Query } from "react-native-appwrite/src";

import client from "@/Utils/AppwriteClient";
type ParkingSpot = {
  title: string;
  price: string;
  time: string;
  address:string;
};

type SimpleParkingSpotCardProps = {
  onPress?: () => void;
};

export default function SimpleParkingSpotCard(props: SimpleParkingSpotCardProps) {
  const [spots, setSpots] =useState<ParkingSpot[]>([])
  const [loading, setLoading] = useState(true);
  const databases = new Databases(client);

  useEffect(() => {
    displayData();
  }, []);

  async function displayData() {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.select(["title", "price", "time", "address"])]);
      setSpots(response.documents as unknown as ParkingSpot[]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    
    <Pressable onPress={props.onPress}>
      {spots.map((spot, index) => (
        <View key={index} style={styles.card1}>
 <Image source={require("@/assets/auth/mall1.png")}/>
          <View style={styles.details}>
            <Text style={styles.title1}>{spot.title}</Text>
            <Text style={styles.title2}>{spot.address}</Text>
            <Text style={styles.title3}>$
            {spot.price}
            <Text style={styles.span}>/hour</Text>
          </Text>
          
          </View>
          <Text style={styles.timeButton}>{spot.time} min</Text>
        </View>
      ))}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card1: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
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
    marginTop: 10,
  },
  title1: {
    color: "#2D2D2D",
    fontSize: 18,
  },
  title2: {
    color: "#2D2D2D",
    fontSize: 14,
    marginBottom: 10,
    opacity: 0.5,
  },
  title3: {
    color: "#F43939",
    fontSize: 20,
  },
  span: {
    fontSize: 12,
    color: "#F43939",
  },
});