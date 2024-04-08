import Sizes from "@/constants/Sizes";
import { Image, Pressable, PressableProps } from "react-native";

const icons = {
  eye: require("../assets/icons/eye.png"),
  "eye-off": require("../assets/icons/eye-off.png"),
  "arrow-left": require("../assets/icons/arrow-left.png"),
  "time-circle": require("../assets/icons/time-circle.png"),
  backspace: require("../assets/icons/backspace.png"),
};

type IconSet = typeof icons;
type IconProps = {
  name: keyof IconSet;
};

export function Icon(props: IconProps & PressableProps) {
  return (
    <Pressable
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        zIndex: 1,
        right: Sizes.md,
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <Image source={icons[props.name]} style={{ width: 24, height: 24, objectFit: "contain" }} />
    </Pressable>
  );
}
