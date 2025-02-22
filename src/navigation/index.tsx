import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TabStack} from './TabStack.tsx';
import {LoadScreen} from '../modules/loading';

export type AppRootStackParamList = {
    TabStack: undefined;
    Detail: undefined;
    Load: undefined;
};

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const AppStackNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Load" children={LoadScreen} />
                <Stack.Screen name="TabStack" component={TabStack} />
                {/*
                <Stack.Screen name="Main" component={MainStack} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNavigator;
