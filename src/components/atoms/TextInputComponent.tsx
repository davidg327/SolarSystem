import React from "react";
import { TextInput, TextStyle } from "react-native";

interface ITextInputComponent {
  value: string;
  onChange: (text: string) => void;
  styles: TextStyle;
  placeholder: string;
  placeholderTextColor: string;
  onSubmitEditing?: () => void;
}

export const TextInputComponent = ({
  value,
  onChange,
  styles,
  placeholder,
  placeholderTextColor,
  onSubmitEditing,
}: ITextInputComponent) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      style={styles}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onSubmitEditing={onSubmitEditing}
    />
  );
};
