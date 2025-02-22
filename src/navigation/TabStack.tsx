import React, {JSX} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../modules/home";
import {CustomTabBar} from "../components/organisms";
import {FavoriteScreen} from "../modules/favorite";

export type TRootMainTabParams = {
    HomeScreen: undefined;
    LoadScreen: undefined;
};

const Tab = createBottomTabNavigator<TRootMainTabParams>();

export function TabStack(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
        </Tab.Navigator>
    );
}

