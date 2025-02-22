import React from 'react';
import {SafeAreaView} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {DetailPlanetTemplate} from "../../../components/template";
import {AppRootStackParamList} from "../../../navigation";
import {styles} from '../../../theme';

interface IProps extends StackScreenProps<AppRootStackParamList, 'DetailPlanet'> {}

export const DetailPlanetScreen = ({route}: IProps) => {
    const {planet} = route.params;
   return(
       <SafeAreaView style={styles.container}>
           <DetailPlanetTemplate planet={planet} />
       </SafeAreaView>
   )
}
