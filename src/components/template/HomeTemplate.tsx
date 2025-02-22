import React from 'react';
import {View} from "react-native";
import {Header} from "../organisms";
import {homeTemplateStyles} from "./template.styles.ts";

interface IHomeTemplate {}

export const HomeTemplate = ({}: IHomeTemplate) => {
    return (
        <View style={homeTemplateStyles.container}>
            <Header name={'Home'} />
        </View>
    )
}
