import React from 'react';
import {Dimensions, Pressable, View} from 'react-native';
import {FlatListComponent, IconComponent, TextComponent} from '../atoms';
import {Button, Search} from '../molecules';
import {Planet,Header} from '../organisms';
import {usePlanetStore} from '../../store';
import {imagesPlanets} from '../../functions';
import {Colors, IPlanet, styles} from '../../theme';
import {homeTemplateStyles} from './template.styles.ts';
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AppRootStackParamList} from "../../navigation";
import {TabStack} from "../../navigation/TabStack.tsx";

const {width} = Dimensions.get('window');

interface IHomeTemplate {
    search: () => void;
    orderAsc: () => void;
    orderDesc: () => void;
}

interface IItem {
    item: IPlanet;
    navigation: HomeNavigation;
}

type HomeNavigation = NativeStackNavigationProp<
    AppRootStackParamList,
    'TabStack'
>;

const Item = ({item, navigation}: IItem) => {

    const {image, name} = imagesPlanets(item.englishName);
    return (
        <Planet
            image={image}
            name={name}
            redirect={() => navigation.navigate('DetailPlanet', {planet: item})}
        />
    );
};

export const HomeTemplate = ({search, orderAsc, orderDesc}: IHomeTemplate) => {
    const navigation = useNavigation<HomeNavigation>();
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
            <View style={homeTemplateStyles.containerFilter}>
                <Pressable style={homeTemplateStyles.icon} onPress={orderAsc}>
                    <IconComponent name={'sort-alpha-asc'} color={Colors.black} size={20} />
                </Pressable>
                <Pressable onPress={orderDesc}>
                    <IconComponent name={'sort-alpha-desc'} color={Colors.black} size={20} />
                </Pressable>
            </View>
            {searchPlanets.length > 0 && (
                <View style={homeTemplateStyles.containerCleanFilter}>
                    <Button onPress={cleanSearch} text={'Limpiar filtro'} background={Colors.error} width={width * 0.3} />
                </View>
            )}
            <FlatListComponent
                list={searchPlanets.length > 0 ? searchPlanets : planets}
                renderItem={({item}: any) => (
                    <Item
                        item={item}
                        navigation={navigation}
                    />
                )}
                contentStyle={homeTemplateStyles.flatList}
                empty={<TextComponent styles={homeTemplateStyles.textEmpty} text={'Sin planetas'} />}
            />
        </View>
    );
};
