import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import {
  TextProps as DefaltTextProps,
  Text as DefaultText,
  useColorScheme,
} from "react-native";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaltTextProps;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <DefaultText
      style={[{ color, fontSize: Sizes.md2x, fontFamily: "Avenir" }, style]}
      {...otherProps}
    />
  );
}
