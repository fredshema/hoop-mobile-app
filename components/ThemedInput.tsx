import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import React from "react";
import {
  TextInput as DefaultTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from "react-native";
import { Icon } from "./Icon";

export function TextInput(props: TextInputProps) {
  return (
    <DefaultTextInput
      {...props}
      placeholderTextColor={props.placeholderTextColor ?? Colors.light.muted}
      style={[styles.input, props.style]}
    />
  );
}

export function PasswordInput(props: TextInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.passwordContainer}>
      <Icon
        name={showPassword ? "eye" : "eye-off"}
        onPress={() => setShowPassword((prev) => !prev)}
      />
      <DefaultTextInput
        {...props}
        secureTextEntry
        placeholderTextColor={props.placeholderTextColor ?? Colors.light.muted}
        style={[styles.input, props.style, { marginBottom: 0 }]}
      />
    </View>
  );
}

export function PhoneInput(props: TextInputProps) {
  const phoneCode = "+62";
  return (
    <View style={styles.phoneInputContainer}>
      <Text style={[styles.input, styles.phoneCode]}>{phoneCode}</Text>
      <View
        style={{
          width: 2,
          backgroundColor: Colors.light.muted,
          marginVertical: Sizes.sm2x,
        }}
      />
      <DefaultTextInput
        {...props}
        placeholderTextColor={props.placeholderTextColor ?? Colors.light.muted}
        style={[styles.input, props.style, styles.phoneInput]}
        keyboardType="phone-pad"
      />
    </View>
  );
}

export function SearchInput(props: TextInputProps) {
  return (
    <View style={styles.phoneInputContainer}>
      <Icon name="search" style={{ marginHorizontal: Sizes.sm }} />
      <DefaultTextInput
        {...props}
        placeholderTextColor={props.placeholderTextColor ?? Colors.light.muted}
        style={[styles.input, props.style, styles.phoneInput]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.md2x,
    fontSize: Sizes.md2x,
    borderRadius: Sizes.md,
    marginBottom: Sizes.md3x,
    backgroundColor: Colors.white,
    color: Colors.light.text,
    fontFamily: "Avenir",
  },
  passwordContainer: {
    position: "relative",
    marginBottom: Sizes.md3x,
  },
  phoneInputContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    marginBottom: Sizes.md3x,
    borderRadius: Sizes.md,
    overflow: "hidden",
  },
  phoneCode: {
    marginBottom: 0,
    borderRadius: 0,
    paddingHorizontal: Sizes.md,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    color: Colors.light.muted,
  },
  phoneInput: {
    marginBottom: 0,
    borderRadius: 0,
  },
});
