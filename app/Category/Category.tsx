import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import Spaces2 from "../Home/Spaces2";
import Spaces from "../Home/Spaces";
export default function Category(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.search}>
                <Text style={styles.icon}><Image source={require("../../assets/auth/filter.png")}/></Text>
        <Text style={styles.title}>Detail Category</Text>
        <Text style={styles.icon}><Image source={require("../../assets/auth/filter.png")}/></Text>
        </View>
        <View style={styles.titleElements}>
        <View style={styles.location}>
            <Text style={styles.log}>
                Nearst
            </Text>
            <Text style={styles.circle}></Text>
            </View>
        <Text style={styles.message}>Most Popular  Most Wanted</Text> 
        </View>
<Spaces/>
<Spaces/>
<Spaces2/>
<Spaces2/>
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
          search:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginBottom:30,
          } ,
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
          icon:{
            backgroundColor:"#EAEAF3",
            width:54,
            height:55,
            padding:5,
            textAlign:"center",
            borderRadius:15,
          }       
})