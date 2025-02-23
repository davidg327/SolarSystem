import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {DetailPlanetTemplate} from '../../../components/template';
import {AppRootStackParamList} from '../../../navigation';
import {Colors, IPlanet, styles, TOKEN_FAVORITE} from '../../../theme';
import {useFavoriteStore} from "../../../store";
import {useNotification} from "../../../hooks";
import {StorageAdapter} from "../../../helpers";

interface IProps extends StackScreenProps<AppRootStackParamList, 'DetailPlanet'> {}

export const DetailPlanetScreen = ({route}: IProps) => {
    const {showNotification} = useNotification();
    const {planet} = route.params;

    const {favorites, getFavorites} = useFavoriteStore();

    const [favoriteActive, setFavoriteActive] = useState('');

    const handleFavorite = () => {
        const findFavorite = favorites.find((findPlanet: IPlanet) => findPlanet.id === planet.id);
        if(findFavorite === undefined) {
            getFavorites([...favorites, planet]);
            showNotification('Se ha agregado a favoritos', Colors.success);
            StorageAdapter.setItem(TOKEN_FAVORITE, [...favorites, planet]);
        }else{
            const deleteFavorite = favorites.filter((favoriteFilter: IPlanet) => favoriteFilter.id !== planet.id);
            getFavorites(deleteFavorite);
            showNotification('Se ha quitado de favoritos', Colors.success);
            StorageAdapter.setItem(TOKEN_FAVORITE,deleteFavorite);
        }
    };

    const favoriteExist = () => {
        const findFavorite = favorites.find((findPlanet: IPlanet) => findPlanet.id === planet.id);
        if(findFavorite !== undefined){
            setFavoriteActive(findFavorite.id);
        }else {
            setFavoriteActive('');
        }
    };

    useEffect(() => {
        favoriteExist();
    }, [favorites]);

   return(
       <SafeAreaView style={styles.container}>
           <DetailPlanetTemplate
               planet={planet}
               handleFavorite={handleFavorite}
               favoriteActive={favoriteActive}
           />
       </SafeAreaView>
   )
}
