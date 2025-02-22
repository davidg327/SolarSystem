import React from "react";
import type {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import { Pressable, View } from "react-native";
import {IconComponent, TextComponent} from "../../atoms";
import { Colors, styles } from "../../../theme";
import { customTabBarStyles } from "./tabBar.styles.ts";

interface ICustomTabBar {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase>;
}

interface IRoute {
  name: string;
  key: string;
}

interface RouteIcon {
  icon: (color: string) => React.ReactNode;
  name: string;
}

const routeIcons: { [key: string]: RouteIcon } = {
  HomeScreen: {
    icon: (color: string) => (
      <IconComponent name={'home'} color={color} />
    ),
    name: 'Home',
  },
  FavoriteScreen: {
    icon: (color: string) => <IconComponent color={color} name={'heart'} />,
    name: "Favoritos",
  },
};

export const CustomTabBar = ({ state, navigation }: ICustomTabBar) => {
  return (
    <View style={[customTabBarStyles.container, styles.shadow]}>
      {state.routes.map((route: IRoute, index: number) => {
        const isFocused = state.index === index;
        let iconColor = isFocused ? Colors.primary : Colors.text;
        const { icon, name } = routeIcons[route.name];
        const stylesText = {
          ...customTabBarStyles.text,
          color: isFocused ? Colors.primary : Colors.text,
        };
        return (
          <Pressable
            onPress={async () => {
              navigation.reset({
                index: 0,
                routes: [{ name: route.name }],
              });
            }}
            key={route.key}
          >
            <View style={customTabBarStyles.containerIcon}>
              {icon(iconColor)}
            </View>
            <TextComponent styles={stylesText} text={name} />
          </Pressable>
        );
      })}
    </View>
  );
};
