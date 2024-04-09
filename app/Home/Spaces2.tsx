import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
export default function Spaces(){
    return(
        <View>
        <View style={styles.card1}>
            <Image source={require("../../assets/auth/mall2.png")} /> 
            <View style={styles.details}>
            <Text style={styles.title1}>Graha Mall</Text>
            <Text style={styles.title2}>123 Dhaka Street</Text>
            <Text style={styles.title3}>$7<Text style={styles.span}>/hour</Text></Text>
            </View>
            <Text style={styles.timeButton}>7 min</Text>
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