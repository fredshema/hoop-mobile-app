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
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.dark.background,
          paddingVertical: Sizes.md,
          paddingHorizontal: Sizes.lg,
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

export function LightButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      style={{
        backgroundColor: Colors.light.light,
      }}
      textStyle={{
        color: Colors.light.dark,
      }}
    />
  );
}
