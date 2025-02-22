import React from 'react';
import {ImageBackgroundComponent, LinearGradientComponent, TextComponent} from '../../atoms';
import {cardPlanetStyles} from './card.styles.ts';
import {Colors} from '../../../theme';
import {Pressable} from "react-native";


interface IHeader {
    image: string;
    name: string;
    redirect: () => void;
}

export const Planet = ({name, image, redirect}: IHeader) => {
  return (
      <Pressable onPress={redirect}>
          <ImageBackgroundComponent styles={cardPlanetStyles.container} source={image} imageStyle={cardPlanetStyles.image} resize={'cover'}>
              <LinearGradientComponent
                  colors={[Colors.blackOpacity, Colors.blackOpacity]}
                  containerStyle={cardPlanetStyles.gradiant}
              >
                  <TextComponent styles={cardPlanetStyles.text} text={name} />
              </LinearGradientComponent>
          </ImageBackgroundComponent>
      </Pressable>
  );
};
