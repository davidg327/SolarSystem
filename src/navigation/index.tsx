import React from "react";
import {
    NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {TabStack} from "./TabStack.tsx";

export type AppRootStackParamList = {
    TabStack: undefined;
    Detail: undefined;
};

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const AppStackNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TabStack" component={TabStack} />
                {/*
                <Stack.Screen name="Main" component={MainStack} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNavigator;
