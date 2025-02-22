import React from 'react';
import {ImageBackgroundComponent, LinearGradientComponent, TextComponent} from '../../atoms';
import {cardPlanetStyles} from './card.styles.ts';
import {Colors} from '../../../theme';


interface IHeader {
    image: string;
    name: string;
}

export const Planet = ({name, image}: IHeader) => {
  return (
      <ImageBackgroundComponent styles={cardPlanetStyles.container} source={image} imageStyle={cardPlanetStyles.image} resize={'cover'}>
          <LinearGradientComponent
              colors={[Colors.blackOpacity, Colors.blackOpacity]}
              containerStyle={cardPlanetStyles.gradiant}
          >
              <TextComponent styles={cardPlanetStyles.text} text={name} />
          </LinearGradientComponent>
      </ImageBackgroundComponent>
  );
};
