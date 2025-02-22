import React from 'react';
import {Pressable, View} from "react-native";
import {headerStyles} from "./header.styles.ts";
import {IconComponent, TextComponent} from "../../atoms";
import {Colors} from "../../../theme";

interface IHeader {
    name: string;
    goBack?: () => void;
}

export const Header = ({name, goBack}: IHeader) => {
  return (
      <View style={headerStyles.container}>
          {goBack && (
              <Pressable onPress={goBack} style={headerStyles.icon}>
                  <IconComponent name={'chevron-left'} color={Colors.white} size={20}  />
              </Pressable>
          )}
          <TextComponent styles={headerStyles.text} text={name} />
      </View>
  )
};
