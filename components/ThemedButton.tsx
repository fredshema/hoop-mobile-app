import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { Text } from "./Themed";

type ButtonProps = PressableProps & {
  label: string;
  textStyle?: any;
};

export function Button(props: ButtonProps) {
  const { style, textStyle, label, ...rest } = props;
  return (
    <Pressable
      style={[
        {
          width: 311,
          height:60,
          backgroundColor: Colors.dark.background,
          paddingVertical: Sizes.md,
          paddingHorizontal: Sizes.lg,
          marginLeft:35,
          borderRadius: Sizes.md,
          marginBottom: Sizes.lg,
        },
        style as StyleProp<ViewStyle>,
      ]}
      {...rest}
    >
      <Text
        style={[
          {
            textAlign: "center",
            color: Colors.light.light,
            fontSize: Sizes.md3x,
            ...textStyle,
          },
        ]}
      >
        {props.label}
      </Text>
    </Pressable>
  );
}

export function PrimaryButton(props: ButtonProps) {
  return <Button {...props} />;
}
