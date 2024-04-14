import Sizes from "@/constants/Sizes";
import { StyleSheet, TouchableOpacity, View ,Image} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ob1 from "./ob/Ob1";
import { Link, Text } from "@/components/Themed";
import { Icon } from "@/components/Icon";
import Colors from "@/constants/Colors";
import Success from "./Payment/Success";
import Plan from "./profile/Plan";
import Upgrade from "./profile/Upgrade";
import Parking from "./Home/categories/Parking";
import Book from "./Home/categories/Book";
import Detail from "./History/Detail";
import Payment from "./Payment/Payment";
import Edit from "./profile/Edit";
import Details from "./Payment/Details";
import Notification from "./Home/categories/Notification";
import Notifications from "./Home/categories/Notifications";
import Home from "./Home/index";
import Profile from "./profile/Profile";
import Explore from "./Explore/index";
import { router } from "expo-router";

export default function RootHome() {
  return (
    <Success/>
  )
}
//   const insets = useSafeAreaInsets();
//   return (
//     <View
//       style={[
//         styles.container,
//         { paddingTop: insets.top, paddingBottom: insets.bottom },
//       ]}
//     >
//       <Link href="/home/" style={styles.skipText}>Skip</Link>
//       <View style={styles.ob}>
//         <Ob1 />
//         <View style={styles.circles}>
//           <View style={[styles.circle, styles.activeCircle]}></View>
//           <View style={styles.circle}></View>
//           <View style={styles.circle}></View>
//         </View>
//       </View>
//       <View style={styles.buttons}>
//         <TouchableOpacity style={styles.btnEmail}>
//         <View style={styles.icon}>
//         <Image source={require("../assets/auth/Message.png")} style={styles.MessageIcon}/>
//           <Text style={styles.textEmail}  onPress={() => {
//           router.push("/Payment/Payment");
//         }}>
//           Login with Email
//           </Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btnPhone}>
// <View style={styles.icon}>
//         <Image source={require("../assets/auth/call.png")} style={styles.MessageIcon}/>
//           <Text style={styles.textPhone}>
//             Login with Phone
//           </Text>
//           </View>
//         </TouchableOpacity>
//         <View style={styles.messageLink}>
//           <Text style={styles.message}>Don't have an account?{" "}
//           </Text>
//           <Link href="/home/">Sign Up</Link>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: Sizes.lg,
//     marginBottom: Sizes.xl2x,
//   },
//   skipText: {
//     textAlign: "right",
//     fontSize: Sizes.md3x,
//     marginTop: Sizes.xl,
//     color: Colors.light.muted,
//   },
//   ob: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circles: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: Sizes.xl,
//   },
//   circle: {
//     width: 6,
//     height: 6,
//     borderRadius: 50,
//     backgroundColor: "#2D2D2D",
//     marginRight: 4,
//     opacity: 0.2,
//   },
//   activeCircle: {
//     backgroundColor: "#F43939",
//     opacity: 1,
//   },
//   icon:{
// flexDirection:"row",
// justifyContent:"center",
//   },
//   buttons: {
//     alignItems: "center",
//   },
//   btnEmail: {
//     width: 311,
//     height: 60,
//     borderRadius: 15,
//     backgroundColor: "#2D2D2D",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   phoneIcon: {
//     marginRight: 8,
//   },
//   emailIcon: {
//     marginRight: 8,
//   },
//   textPhone: {
//     color: "#2D2D2D",
//     opacity: 0.7,
//     textAlign: "center",
//     marginLeft:15,
//     marginTop:10,
//     fontSize: 18,
//   },
//   message: {
//     color: "#2D2D2D",
//   },
//   textEmail: {
//     color: "#FFFFFF",
//     textAlign: "center",
//     fontSize: 18,
//     marginLeft:15,
//     marginTop:10,

//   },
//   btnPhone: {
//     width: 311,
//     height: 60,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 15,
//     marginTop: 20,
//   },
//   messageLink: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   link: {
//     color: "#F43939",
//     marginLeft: 10,
//   },
//   MessageIcon:{
//     width:24,
//     height:24,
//     marginTop:10,
//   }
// });
