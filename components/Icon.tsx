import { Image, Pressable, PressableProps } from "react-native";

const icons = {
  eye: require("../assets/icons/eye.png"),
  "eye-off": require("../assets/icons/eye-off.png"),
  "arrow-left": require("../assets/icons/arrow-left.png"),
  "time-circle": require("../assets/icons/time-circle.png"),
  backspace: require("../assets/icons/backspace.png"),
  fingerprint: require("../assets/icons/fingerprint.png"),
  filter: require("../assets/icons/fingerprint.png"),
  call: require("../assets/icons/call.png"),
  message: require("../assets/icons/Message.png"),
  "info-circle": require("@/assets/icons/info-circle.png"),
  location: require("@/assets/icons/location.png"),
};

const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  "2xl": 64,
};

type IconSet = typeof icons;
type IconProps = {
  name: keyof IconSet;
  size?: keyof typeof sizes;
};

export function Icon(props: IconProps & PressableProps) {
  return (
    <Pressable
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <Image
        source={icons[props.name]}
        style={{
          objectFit: "contain",
          width: sizes[props.size ?? "md"],
          height: sizes[props.size ?? "md"],
        }}
      />
    </Pressable>
  );
}
