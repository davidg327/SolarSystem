import React from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ILinearGradientComponent {
  colors: (string | number)[];
  containerStyle: ViewStyle;
  children: React.ReactNode;
}

export const LinearGradientComponent = ({
  colors,
  containerStyle,
  children,
}: ILinearGradientComponent) => {
  return (
    <LinearGradient colors={colors}  style={containerStyle}>
      {children}
    </LinearGradient>
  );
};
