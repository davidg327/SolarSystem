import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {HomeTemplate} from '../../../components/template';
import {useFavoriteStore, usePlanetStore} from '../../../store';
import {useNotification} from '../../../hooks';
import {imagesPlanets, normalizeText} from "../../../functions";
import {Colors, IPlanet, styles, TOKEN_FAVORITE} from '../../../theme';
import {StorageAdapter} from "../../../helpers";

export const HomeScreen = () => {
    const {showNotification} = useNotification();

    const {
        planets,
        search,
        getPlanets,
        getSearchPlanets,
    } = usePlanetStore();
    const {getFavorites} = useFavoriteStore();

    const [load, setLoad] = useState(false);

    const getPlanetsApi = () => {
        axios.get('https://api.le-systeme-solaire.net/rest.php/bodies')
            .then(function (response) {
                if(response.data?.bodies.length > 0){
                    const onlyPlanets = response.data?.bodies.filter((planet: IPlanet) => planet.isPlanet);
                    getPlanets(onlyPlanets);
                }
                setLoad(false);
            })
            .catch(function (error) {
                setLoad(false);
                showNotification('No pudimos encontrar la ruta', Colors.error);
            });
    };

    const searchPlanet = () => {
        const planet = planets.filter((planet: IPlanet) =>
            normalizeText(imagesPlanets(planet.englishName).name).includes(normalizeText(search)));
        if(planet.length > 0){
            getSearchPlanets(planet);
        }else {
            showNotification('No se encontraron datos', Colors.error);
        }
    };

    const orderAsc = () => {
       const ascendingPlanets= [...planets].sort((a, b) =>
                imagesPlanets(a.englishName).name.localeCompare(imagesPlanets(b.englishName).name)
            );
        getPlanets(ascendingPlanets);
    };

    const orderDesc = () => {
        const ascendingPlanets= [...planets].sort((a, b) =>
            imagesPlanets(b.englishName).name.localeCompare(imagesPlanets(a.englishName).name)
        );
        getPlanets(ascendingPlanets);
    };

    const favoriteStorage = async () => {
        const favorites = await StorageAdapter.getItem(TOKEN_FAVORITE);
        if(favorites !== null){
            getFavorites(favorites);
        }
    };

    useEffect(() => {
        setLoad(true);
        getPlanetsApi();
        favoriteStorage();
    }, []);

    return(
        <SafeAreaView style={load ? styles.containerCenter : styles.container}>
            {load && (
                <ActivityIndicator color={Colors.primary} size={'large'} />
            )}
            {!load && (
                <HomeTemplate
                    search={searchPlanet}
                    orderAsc={orderAsc}
                    orderDesc={orderDesc}
                />
            )}
        </SafeAreaView>
    );
};
