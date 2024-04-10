import React from "react";
import {Text, View, StyleSheet, Image, TextInput} from "react-native";

export default function Explore(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
        <Text style={styles.title}>Explore</Text>
        <TextInput style={styles.inputField} placeholder="search"></TextInput>
        <View style={styles.titleElements}>
        <View style={styles.location}>
            <Text style={styles.log}>
                Nearst
            </Text>
            <Text style={styles.circle}></Text>
            </View>
        <Text style={styles.message}>Most Popular  Most Wanted</Text> 
        </View>
    </View>
    </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F4F4FA",
    },
content:{
marginTop:60,
marginLeft:20,
marginRight:20,
},
    inputField:{
        width:311,
        height:55,
        backgroundColor:"#EAEAF3",
        borderRadius:15,
        padding:20,
        marginBottom:40,
          },
          title: {
            textAlign:"center",
            color: "#2D2D2D",
            fontSize: 20,
            marginBottom:30,
          },
          location:{
            backgroundColor:"#081024",
            width:73,
            height:56,
            borderTopRightRadius:6,
            borderTopLeftRadius:6,
            borderBottomRightRadius:30,
            borderBottomLeftRadius:30,
            flexDirection:"column",
            justifyContent:"center",
            marginRight:20,
            marginBottom:50,
          },
          log:{
            color:"#FFFFFF",
            textAlign:"center",
            
          },
          circle:{
backgroundColor:"#F43939",
width:6,
height:6,
borderRadius:50,
marginTop:6,
marginLeft:33,

          },
          titleElements:{
            flexDirection:"row",
          },
          message:{
            marginTop:20,
            fontSize:16,
            color:"#2D2D2D",
            opacity:0.4,
            lineHeight:21.28,
          },
          
})