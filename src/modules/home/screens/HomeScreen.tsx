import React from 'react';
import {SafeAreaView} from "react-native";
import {styles} from "../../../theme";
import {HomeTemplate} from "../../../components/template";

export const HomeScreen = () => {
   return(
       <SafeAreaView style={styles.container}>
           <HomeTemplate />
       </SafeAreaView>
   )
}
