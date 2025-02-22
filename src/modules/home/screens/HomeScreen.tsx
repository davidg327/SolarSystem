import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native';
import {HomeTemplate} from '../../../components/template';
import {usePlanetStore} from '../../../store';
import {useNotification} from '../../../hooks';
import {imagesPlanets, normalizeText} from "../../../functions";
import {Colors, IPlanet, styles} from '../../../theme';

export const HomeScreen = () => {
    const {showNotification} = useNotification();

    const {planets, search, getPlanets, getSearchPlanets} = usePlanetStore();

    const getPlanetsApi = () => {
        axios.get('https://api.le-systeme-solaire.net/rest.php/bodies')
            .then(function (response) {
                if(response.data?.bodies.length > 0){
                    const onlyPlanets = response.data?.bodies.filter((planet: IPlanet) => planet.isPlanet);
                    getPlanets(onlyPlanets);
                }
            })
            .catch(function (error) {
                showNotification('No pudimos encontrar la ruta', Colors.error);
            });
    };

    const searchPlanet = () => {
        console.log(imagesPlanets(planets[0].englishName).name.toLowerCase().trim(), '1');
        console.log(search.toLowerCase().trim(), '2');
        const planet = planets.filter((planet: IPlanet) =>
            normalizeText(imagesPlanets(planet.englishName).name).includes(normalizeText(search)));
        console.log(planet, 'planeta');
        getSearchPlanets(planet);
    };

    useEffect(() => {
        getPlanetsApi();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <HomeTemplate search={searchPlanet} />
        </SafeAreaView>
    );
};
