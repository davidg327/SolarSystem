import React from 'react';
import {ViewStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

interface ILinearGradientComponent {
  colors: readonly [string, string, ...string[]];
  containerStyle: ViewStyle;
  children: React.ReactNode;
}

export const LinearGradientComponent = ({
  colors,
  containerStyle,
  children,
}: ILinearGradientComponent) => {
  return (
    <LinearGradient colors={colors} style={containerStyle}>
      {children}
    </LinearGradient>
  );
};
