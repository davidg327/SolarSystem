import React from 'react';
import {View} from 'react-native';
import {Header, Planet} from '../organisms';
import {favoriteTemplateStyles, homeTemplateStyles} from './template.styles.ts';
import {useFavoriteStore} from "../../store";
import {FlatListComponent, TextComponent} from "../atoms";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AppRootStackParamList} from "../../navigation";
import {imagesPlanets} from "../../functions";
import {IPlanet} from "../../theme";

interface IFavoriteTemplate {}

type FavoriteNavigation = NativeStackNavigationProp<
    AppRootStackParamList,
    'TabStack'
>;

interface IItem {
    item: IPlanet;
    navigation: FavoriteNavigation;
}

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

export const FavoriteTemplate = ({}: IFavoriteTemplate) => {
    const navigation = useNavigation<FavoriteNavigation>();
    const {favorites} = useFavoriteStore();
    return (
        <View style={favoriteTemplateStyles.container}>
            <Header name={'Favoritos'} />
            <View  style={favoriteTemplateStyles.containerFavorite}/>
            <FlatListComponent
                list={favorites}
                renderItem={({item}: any) => (
                    <Item
                        item={item}
                        navigation={navigation}
                    />
                )}
                contentStyle={homeTemplateStyles.flatList}
                empty={<TextComponent styles={homeTemplateStyles.textEmpty} text={'No tiene planetas favoritos'} />}
            />
        </View>
    );
};
