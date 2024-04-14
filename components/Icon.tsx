import { Image, Pressable, PressableProps } from "react-native";

const icons = {
  "eye-off": require("@/assets/icons/eye-off.png"),
  "arrow-left": require("@/assets/icons/arrow-left.png"),
  "arrow-up-left": require("@/assets/icons/arrow-up-left.png"),
  "time-circle": require("@/assets/icons/time-circle.png"),
  "info-circle": require("@/assets/icons/info-circle.png"),
  "screw-driver": require("@/assets/icons/screw-driver.png"),
  "current-location": require("@/assets/icons/current-location.png"),
  "dark-arrow-left": require("@/assets/icons/dark-arrow-left.png"),
  "message-pink": require("@/assets/icons/messagepink.png"),
  eye: require("@/assets/icons/eye.png"),
  backspace: require("@/assets/icons/backspace.png"),
  fingerprint: require("@/assets/icons/fingerprint.png"),
  filter: require("@/assets/icons/fingerprint.png"),
  call: require("@/assets/icons/call.png"),
  message: require("@/assets/icons/Message.png"),
  location: require("@/assets/icons/location.png"),
  fuel: require("@/assets/icons/fuel.png"),
  car: require("@/assets/icons/car.png"),
  search: require("@/assets/icons/search.png"),
  comment: require("@/assets/icons/comment.png"),
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
