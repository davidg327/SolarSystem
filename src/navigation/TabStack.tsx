import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../modules/home";
import {CustomTabBar} from "../components/organisms";

export type TRootMainTabParams = {
    HomeScreen: undefined;
    FavoriteScreen: undefined;
};

const Tab = createBottomTabNavigator<TRootMainTabParams>();

export function TabStack(): Element {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="FavoriteScreen" component={HomeScreen} />
        </Tab.Navigator>
    );
}

