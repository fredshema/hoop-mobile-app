import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
export default function Details() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Payment Details</Text>
        <View style={styles.rectangle}>
<Text style={styles.txt}>Mobile Banking</Text>
<Image source={require("../../assets/auth/arrow.png")}/>
    </View>
        <View style={styles.card}>
            <View style={styles.message}>
      <Text>Credit Card</Text>
      <Image source={require("../../assets/auth/arrow.png")}/>
      </View>
      <View style={styles.cardNames}>
      <Image source={require("../../assets/auth/mastercard.png")}/>
      <Text style={styles.accountNumber}>ABC Bank   **** 6189</Text>
      </View>
      
      <View style={styles.cardNames}>
    <Image source={require("../../assets/auth/visa.png")}/>
      <Text style={styles.accountNumber}>ABC Bank   **** 6189</Text>
      </View>
      <View style={styles.add}>
      <Text style={styles.circles}>+</Text>
      <Text style={styles.text}>Add new card</Text>
      </View>
      </View>
      <View style={styles.rectangle}>
<Text style={styles.txt}>Google Play</Text>
<Image source={require("../../assets/auth/arrow.png")}/>
    </View>
    <View style={styles.rectangle}>
<Text style={styles.txt}>Debit Card</Text>
<Image source={require("../../assets/auth/arrow.png")}/>
    </View>
    <View style={styles.messages}>
    <Text>Send receipt to your email</Text>
    <Image source={require("../../assets/auth/on.png")}/>
    </View>
      <View style={styles.button}>
      <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Pay Now</Text>
          </TouchableOpacity>
          </View>
          </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor:"#F4F4FA"
  },
  cardNames:{flexDirection:"row",
  marginBottom:20,
  backgroundColor:"#F4F4FA",
  padding:10,
  width:279,
  height:47,
  borderRadius:Sizes.sm1x,
},
  message:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:10,

  },
  messages:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginBottom:20,
      },
  txt:{
    fontSize:Sizes.md,
    marginRight:30,
    color:"#2D2D2D",
      },
      accountNumber:{
        marginLeft:20,
        fontSize: Sizes.sm3x,
      },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    textAlign: "center",
  },
  circles:{
backgroundColor:"#F43939",
width:20,
height:20,
color:Colors.dark.text,
textAlign:"center",
borderRadius:50,
  },
  add:{
flexDirection:"row",
  },
  card:{
backgroundColor:Colors.dark.text,
width:311,
height:238,
padding:15,
marginLeft:35,
marginBottom:20,
borderRadius:Sizes.sm1x,
  },
  text:{
    color:"#2D2D2D",
    opacity:0.5,
    marginLeft:10,
  },
  rectangle:{
    backgroundColor:Colors.dark.text,
    flexDirection:"row",
    justifyContent:"space-between",
    width:311,
    height:61,
    padding:15,
    marginLeft:30,
    borderRadius:10,
    marginBottom:20,
  },
  texts:{
color:"#2D2D2D",
opacity:0.6,
fontSize:Sizes.md,
  },
  paragraph:{
    marginLeft:20,
    color:"#2D2D2D",
    opacity:0.2,
    fontSize:Sizes.md2x,
  },
  background:{
    backgroundColor:"#FFF3F3",
    width:91,
    color:"#F43939",
    height:35,
    textAlign:"center",
    marginLeft:20,
    fontSize:Sizes.sm3x,
    borderRadius:Sizes.sm1x,
  },
  icons:{
    flexDirection:"row",
    justifyContent:"center"
  },
  images:{
    flexDirection:"row",
    justifyContent:"center",
  },
  button:{
flexDirection:"row",
justifyContent:"center",
marginTop:2,

  },
  btnText:{
color:Colors.dark.text,
textAlign:"center",
marginTop:15,
fontSize:Sizes.md3x,
  },
  btn:{
    backgroundColor:"#130F26",
    borderRadius:15,
    width:311,
    height:60,
  }
});

