import React from 'react';
import {Pressable, View} from 'react-native';
import {TextComponent} from '../../atoms';
import {buttonStyles} from "./button.styles.ts";

interface IButton {
    onPress: () => void;
    text: string;
    background: string;
    width: number;
}

export const Button = ({onPress, text, background, width}: IButton) => {
    const containerButton = {
        ...buttonStyles.container,
        backgroundColor: background,
        width: width,
    }
  return (
      <Pressable style={containerButton} onPress={onPress}>
          <TextComponent styles={buttonStyles.text} text={text} />
      </Pressable>
  )
};
