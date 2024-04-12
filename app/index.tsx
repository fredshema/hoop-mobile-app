import Sizes from "@/constants/Sizes";
import { StyleSheet, TouchableOpacity, View } from "react-native";
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

export default function Home() {
  return(
    <Notifications/>
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
//           <Text style={styles.textEmail}>
//             <Icon name="message" />
//             Login with Email
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btnPhone}>
//           <Text style={styles.textPhone}>
//             <Icon name="call" />
//             Login with Phone
//           </Text>
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
//     marginTop: 15,
//     fontSize: 18,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   message: {
//     color: "#2D2D2D",
//   },
//   textEmail: {
//     color: "#FFFFFF",
//     textAlign: "center",
//     marginTop: 15,
//     fontSize: 18,
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
// });
