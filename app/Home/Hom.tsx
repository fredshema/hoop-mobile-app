import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import Spaces from "./Spaces";
import Spaces2 from "./Spaces2";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View, Image
} from "react-native";

export default function Hom() {
  const bgImage = require("../../assets/auth/pattern.png");
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <View style={styles.titleElements}>
            <View style={styles.greetings}>
          <Text style={styles.name}>Hola Diane 👋🏻</Text>
          <Text style={styles.subtitles}>Find an easy parking spot</Text>
          </View>
          <Text>
          <Image source={require("../../assets/auth/Notification.png")}/>
          </Text>
          
          </View>
          <TextInput style={styles.inputField} placeholder="search"></TextInput>
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
            <Text style={styles.titles}>Nearst Parking Spaces</Text>
           <Spaces/>
           <Spaces2/>
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
  inputField:{
width:311,
height:55,
backgroundColor:"#2A344E",
borderRadius:Sizes.md,
padding:15,
marginTop:20,
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
  },
  imagesElement:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  box:{
    flexDirection:"column",
    justifyContent:"center",
    width:67,
    height:73,
    padding:18,
    backgroundColor:"#FFFFFF",
    borderRadius:10,
    marginBottom:40,
  },
  vehicleNames:{
    marginTop:10,
  },
  titles:{
    fontSize:20,
    marginBottom:20,
    color:"#0A1124",
  },
  card1:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#FFFFFF",
    borderRadius:15,
    padding:15,
  },
  timeButton:{
    backgroundColor: "#FFF3F3",
    color:"#F43939",
    opacity:0.8,
    fontSize:12,
    borderRadius:15,
    textAlign:"center",
    padding:4,
    width:59,
    height:26,
  },
  details:{
    marginTop:15,
  },
  title1:{
    color:"#2D2D2D",
    fontSize:18,
  },
  title2:{
    color:"#2D2D2D",
    fontSize:14,
    marginBottom:15,
    opacity:0.5, 
  },
  title3:{
    color:"#F43939",
    fontSize:20,
  },
  span:{
fontSize:12,
  }
});
