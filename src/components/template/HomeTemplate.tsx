import React from 'react';
import {Dimensions, View} from 'react-native';
import {FlatListComponent, TextComponent} from '../atoms';
import {Button, Search} from '../molecules';
import {Planet,Header} from '../organisms';
import {usePlanetStore} from '../../store';
import {imagesPlanets} from '../../functions';
import {Colors, IPlanet} from '../../theme';
import {homeTemplateStyles} from './template.styles.ts';

const {width} = Dimensions.get('window');

interface IHomeTemplate {
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

export const HomeTemplate = ({search}: IHomeTemplate) => {
    const {planets, searchPlanets, search: value, cleanSearch, setSearch} = usePlanetStore();
    return (
        <View style={homeTemplateStyles.container}>
            <Header name={'Home'} />
            <Search
                value={value}
                onChange={setSearch}
                placeholder={'Buscar'}
                search={search}
            />
            {searchPlanets.length > 0 && (
                <View style={homeTemplateStyles.containerCleanFilter}>
                    <Button onPress={cleanSearch} text={'Limpiar filtro'} background={Colors.error} width={width * 0.3} />
                </View>
            )}
            <FlatListComponent
                list={searchPlanets.length > 0 ? searchPlanets : planets}
                renderItem={Item}
                contentStyle={homeTemplateStyles.flatList}
                empty={<TextComponent styles={homeTemplateStyles.textEmpty} text={'Sin planetas'} />}
            />
        </View>
    );
};
