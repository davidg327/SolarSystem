import React from 'react';
import {SafeAreaView, View} from "react-native";
import {styles} from "../../../theme";
import {FavoriteTemplate} from "../../../components/template";

export const FavoriteScreen = () => {
   return(
       <SafeAreaView style={styles.container}>
           <FavoriteTemplate />
       </SafeAreaView>
   )
}
