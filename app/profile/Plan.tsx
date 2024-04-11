import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
export default function Plan() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Upgrade</Text>
        <View style={styles.images}>
      <Image source={require("../../assets/auth/upgrade-plan.png")}/>
      </View>
      <View style={styles.card1}>
        <Text style={styles.circleActive}>  
        </Text>
        <View style={styles.yearly}>
        <Text style={styles.titles}>Yearly</Text>
        <Text style={styles.bodyMessage}>Pay for a full year</Text>
        </View>
        <Text style={styles.price}>$210<Text style={styles.time}>/y</Text></Text>
      </View>
      <View style={styles.card2}>
        
        <Text style={styles.circle}></Text>
        <View style={styles.monthly}>
        <Text style={styles.titles}>Monthly</Text>
        <Text style={styles.bodyMessage}>Pay monthly, cancel anytime</Text>
        </View>
        <Text style={styles.salary}>$20<Text style={styles.period}>/m</Text></Text>
      </View>
      <PrimaryButton
            label="Make  Payment"
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
flex:1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor:Colors.light["secondary-background"],
  },
  bodyMessage: {
    color: "#2D2D2D",
    opacity: 0.5,
    fontSize: Sizes.md,

  },
  yearly:{
marginRight:60,
  },
  monthly:{
marginLeft:20,
  },
  time:{
    fontSize:Sizes.sm3x,
    color:"#F43939",
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
    fontSize: Sizes.md2x,
  },
  price:{
    color:"#F43939",
    fontSize:Sizes.md3x,

  },
  salary:{
    color:"#2D2D2D",
    fontSize:Sizes.md3x,
  },
  period:{
    color:"#2D2D2D",
    fontSize:Sizes.sm3x,
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
    marginBottom:Sizes.lg,
  },
  card1:{
    backgroundColor:Colors.dark.text,
    borderColor:"#F43939",
    flexDirection:"row",
    justifyContent:"space-between",
    margin:30,
    padding:15,
    borderRadius:Sizes.md3x,
    borderWidth:1,
  },
  card2:{
    backgroundColor:Colors.light.background,
    borderColor:"#EAEAF3",
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:30,
    marginRight:30,
    padding:15,
    marginBottom:40,
    borderRadius:Sizes.md3x,
    borderWidth:1,
  },
  circleActive:{
    backgroundColor:"#F43939",
    width:13.5,
    height:13.5,
    borderRadius:50,
    marginTop:Sizes.md2x,
  },
  circle:{
    borderWidth:1,
   borderColor:"#2D2D2D",
    opacity:0.4,
    width:18,
    height:18,
    borderRadius:50,
    marginTop:Sizes.md2x,
  }
});
