import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View, Image
} from "react-native";

export default function Profile() {
  const bgImage = require("../../assets/auth/pattern.png");
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.titleElements}>
            <Image source={require("../../assets/auth/profile.png")}/>
            <View style={styles.greetings}>
          <Text style={styles.subtitles}>Welcome</Text>
          <Text style={styles.name}>Diane</Text>
          </View>
          <Image source={require("../../assets/auth/P_icon.png")} style={styles.icon}/>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={{ flex: 1 }}>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.button}>
            <Text style={styles.btnText}><Image source={require("../../assets/auth/headset.png")} />  How can we help you?</Text>
          </Pressable>
          <Text style={styles.text}>
          Parking v.1
          </Text>
        </View>
      </View>
    </View>
  );
}

function LoginWithEmail() {
  return (
    <View>
      <TextInput placeholder="Email" inputMode="email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    </View>
  );
}
function LoginWithPhone() {
  return (
    <View>
      <TextInput placeholder="Phone number" inputMode="tel" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
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
    textAlign:"center",
    color: "#FFFFFF",
    fontSize: 20,
  },
  text: {
    fontSize: 12,
    color: "#2D2D2D",
    opacity:0.4,
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
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  images:{
    marginTop:20, 
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
  subtitles:{
    color:"#FFFFFF",
    opacity:0.5,
    fontSize:14,
  },
  name:{
    color:"#FFFFFF",
    fontSize:20,
  },
  titleElements:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,
  },
  greetings:{
   marginRight:120,
   marginTop:15,
    
  },
  icon:{
    marginTop:15,
  }
});
