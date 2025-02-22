import React from "react";
import { TextInput, TextStyle } from "react-native";

interface ITextInputComponent {
  value: string;
  onChange: (text: string) => void;
  styles: TextStyle;
  placeholder: string;
  placeholderTextColor: string;
}

export const TextInputComponent = ({
  value,
  onChange,
  styles,
  placeholder,
  placeholderTextColor,
}: ITextInputComponent) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      style={styles}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};
