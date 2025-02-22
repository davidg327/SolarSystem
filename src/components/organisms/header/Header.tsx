import React from 'react';
import {View} from "react-native";
import {headerStyles} from "./header.styles.ts";
import {TextComponent} from "../../atoms";

interface IHeader {
    name: string;
}

export const Header = ({name}: IHeader) => {
  return (
      <View style={headerStyles.container}>
          <TextComponent styles={headerStyles.text} text={name} />
      </View>
  )
};
