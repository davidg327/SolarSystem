import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TabStack} from './TabStack.tsx';
import {LoadScreen} from '../modules/loading';
import {DetailPlanetScreen} from "../modules/detailPlanet";
import {IPlanet} from "../theme";

export type AppRootStackParamList = {
    TabStack: undefined;
    Load: undefined;
    DetailPlanet: {planet: IPlanet};
};

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const AppStackNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Load" children={LoadScreen} />
                <Stack.Screen name="TabStack" component={TabStack} />
                <Stack.Screen name="DetailPlanet" component={DetailPlanetScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNavigator;
