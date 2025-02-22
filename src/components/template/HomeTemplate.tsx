import React from 'react';
import {View} from 'react-native';
import {FlatListComponent, TextComponent} from '../atoms';
import {Search} from '../molecules';
import {Planet,Header} from '../organisms';
import {usePlanetStore} from '../../store';
import {imagesPlanets} from '../../functions';
import {IPlanet} from '../../theme';
import {homeTemplateStyles} from './template.styles.ts';

interface IHomeTemplate {
    value: string;
    onChange: (text: string) => void;
    search: () => void;
}

interface IItem {
    item: IPlanet;
}

const Item = ({item}: IItem) => {
    const {image, name} = imagesPlanets(item.englishName);
    return (
        <Planet image={image} name={name} />
    );
};

export const HomeTemplate = ({value, onChange, search}: IHomeTemplate) => {
    const {planets} = usePlanetStore();
    return (
        <View style={homeTemplateStyles.container}>
            <Header name={'Home'} />
            <Search
                value={value}
                onChange={onChange}
                placeholder={'Buscar'}
                search={search}
            />
            <FlatListComponent
                list={planets}
                renderItem={Item}
                contentStyle={homeTemplateStyles.flatList}
                empty={<TextComponent styles={homeTemplateStyles.textEmpty} text={'Sin planetas'} />}
            />
        </View>
    );
};
