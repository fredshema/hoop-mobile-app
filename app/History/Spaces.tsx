import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
export default function Spaces(){
    return(
        <View>
        <View style={styles.card1}>
            <Image source={require("../../assets/auth/mall1.png")} /> 
            <View style={styles.details}>
            <Text style={styles.title1}>Graha Mall</Text>
            <Text style={styles.title2}>123 Dhaka Street</Text>
            <View style={styles.btns}>
            <Text style={styles.timeButton}>
                <Image source={require("../../assets/auth/location.png")}/>  A-6
                </Text>
            <Text style={styles.timeButton}> <Image source={require("../../assets/auth/clock.png")} /> 4 hours</Text>
            </View>
            </View>
            <Text style={styles.title4}>12 Aug</Text>
            </View>
            </View>
    )
}
const styles=StyleSheet.create({
    card1:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#FFFFFF",
        borderRadius:15,
        padding:15,
        marginBottom:20,
      },
      timeButton:{
        backgroundColor: "#FFF3F3",
        color:"#F43939",
        fontSize:12,
        borderRadius:7,
        textAlign:"center",
        padding:4,
        marginLeft:15,
        width:71,
        height:26,
      },
      details:{
        marginTop:15,
      },
      title1:{
        color:"#2D2D2D",
        fontSize:18,
        marginLeft:15,
      },
      title2:{
        color:"#2D2D2D",
        fontSize:14,
        marginBottom:15,
        opacity:0.5,
        marginLeft:15, 
      },
      title4:{
        color:"#2D2D2D",
        fontSize:12,
        marginBottom:15,
        opacity:0.5, 
      },
      title3:{
        color:"#F43939",
        fontSize:20,
      },
      span:{
    fontSize:12,
      },
      btns:{
        flexDirection:"row",
      },
      icon:{
        color:"#F43939",
      }
    });