import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native';
import {HomeTemplate} from '../../../components/template';
import {usePlanetStore} from '../../../store';
import {useNotification} from '../../../hooks';
import {Colors, IPlanet, styles} from '../../../theme';

export const HomeScreen = () => {
    const {showNotification} = useNotification();

    const {getPlanets} = usePlanetStore();

    const [search, setSearch] = useState('');

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

    useEffect(() => {
        getPlanetsApi();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <HomeTemplate value={search} onChange={setSearch} search={() => {}} />
        </SafeAreaView>
    );
};
