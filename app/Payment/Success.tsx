import Sizes from "@/constants/Sizes";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
export default function Success() {
  return (
    <View style={styles.container}>
        <View style={styles.images}>
      <Image source={require("../../assets/auth/success.png")}/>
      </View>
      <Text style={styles.title}>Payment Success</Text>
      <Text style={styles.bodyMessage}>Congrats on your reserved parking space</Text>
      <Text style={styles.titles}>Receipt</Text>
      <View style={styles.icons}>
      <Text style={styles.background}><Icon name="message-pink"/></Text>
      <Text style={styles.background}><Icon name="comment"/></Text>
      </View>
      <PrimaryButton
            label="Back to Home"
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignContent: "center",
    justifyContent: "center",
  },
  bodyMessage: {
    color: "#2D2D2D",
    opacity: 0.5,
    fontSize: Sizes.md2x,
    marginLeft:30,
    marginBottom:30,
  },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    textAlign: "center",
    marginTop: Sizes.lg,
    marginBottom: Sizes.sm,
  },
  titles:{
    color: "#2D2D2D",
    fontSize: Sizes.md,
    textAlign: "center",
    marginTop: Sizes.lg,
    marginBottom: Sizes.sm,
  },
  background:{
    backgroundColor:"#FFFFFF",
    width:48,
    height:48,
    borderRadius:Sizes.vsm,
    margin:12,
    padding:12,
    marginBottom:60,
  },
  icons:{
    flexDirection:"row",
    justifyContent:"center"
  },
  images:{
    flexDirection:"row",
    justifyContent:"center",
  },
});

