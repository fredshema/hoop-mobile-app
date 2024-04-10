import React from "react";
import {Text, View, StyleSheet, Image, TextInput} from "react-native";
import Spaces from "./Spaces";
import Spaces2 from "./Spaces2";
export default function History(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
        <Text style={styles.title}>History</Text>
        <View style={styles.search}>
        <TextInput style={styles.inputField}>
       <Text style={styles.placeholder}> <Image source={require("../../assets/auth/search.png")}/> Search</Text> 
        </TextInput>
        <Text style={styles.icon}><Image source={require("../../assets/auth/filter.png")} style={styles.filterIcon}/></Text>
        </View>
        <Text style={styles.titles}>Recently</Text>
<Spaces/>
<Spaces/>
<Text style={styles.titles}>This week</Text>
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
        width:241,
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
          titles:{
            fontSize:20,
            marginBottom:20,
            color:"#2D2D2D",
          }, 
          search:{
            flexDirection:"row",
            justifyContent:"space-between",
          } ,
          icon:{
            backgroundColor:"#EAEAF3",
            width:54,
            height:55,
            padding:15,
            borderRadius:15,
          }   ,
          placeholder:{
            color:"#2D2D2D",
            opacity:0.4,
          },
          filterIcon:{
            width:20,
            height:20,
          }    
})