import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import { PrimaryButton } from "@/components/ThemedButton";
import { Icon } from "@/components/Icon";
export default function Upgrade() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Upgrade</Text>
        <View style={styles.card}>
        <Text style={styles.titles}>Get all the facilities by upgrading your account</Text>
        </View>
     <View style={styles.card}>
      <View style={styles.card1}>
        <Text style={styles.title}>
            Pro
        </Text>
        <View style={styles.icons}>
       <Icon name="tick"/>
       <View style={styles.words}>
       <Text > All Include</Text>
       </View>
       </View>
       <View style={styles.icons}>
       <Icon name="tick"/>
       <View style={styles.word}>
       <Text >  Unlimited Feature</Text>
       </View>
       </View>
       <View style={styles.icons}>
       <Icon name="tick"/>
       <Text> Discounts every reservation</Text> 
       </View>
       <View style={styles.icons}>
       <Icon name="tick"/> 
       <View style={styles.words}>
       <Text>All Include</Text>
       </View>
       </View>
       <View style={styles.icons}>
       <Icon name="tick"/>
       <View style={styles.words}>
       <Text> All Include</Text> 
      </View>
      </View>
      </View>
      </View>
      <PrimaryButton
            label="Choose a Plan"
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
icons:{
    flexDirection:"row-reverse",
    marginTop:Sizes.md3x,
    
},
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    textAlign: "center",
    marginTop: Sizes.md4x,
    marginBottom: Sizes.sm,
  },
  titles:{
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    margin:30,
  },
  card1:{
    backgroundColor:Colors.dark.text,
    padding:5,
    borderRadius:Sizes.md3x,
    width:257,
    height:372,
    marginBottom:Sizes.xl2x,
  },
  card:{
    flexDirection:"row",
    justifyContent:"center",
  },
  words:{
   marginRight:123,
  },
  word:{
    marginRight:68,
  },
 
});

