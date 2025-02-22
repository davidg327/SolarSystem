import React from 'react';
import {ImageStyle, ImageResizeMode, ImageBackground} from 'react-native';

interface IImageBackgroundComponent {
  styles: ImageStyle;
  imageStyle: ImageStyle;
  resize?: ImageResizeMode;
  source: string;
  children: React.ReactNode;
}

export const ImageBackgroundComponent = ({
  imageStyle,
  styles,
  resize,
  source,
  children,
}: IImageBackgroundComponent) => {
  return (
    <ImageBackground
        imageStyle={imageStyle}
        style={styles}
        resizeMode={resize}
        source={{uri: source}}>
      {children}
    </ImageBackground>
  );
};
