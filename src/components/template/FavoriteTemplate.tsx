import React from 'react';
import {View} from 'react-native';
import {Header} from '../organisms';
import {favoriteTemplateStyles} from './template.styles.ts';

interface IFavoriteTemplate {}

export const FavoriteTemplate = ({}: IFavoriteTemplate) => {
    return (
        <View style={favoriteTemplateStyles.container}>
            <Header name={'Favoritos'} />
        </View>
    );
};
