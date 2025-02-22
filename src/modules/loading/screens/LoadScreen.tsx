import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppRootStackParamList} from '../../../navigation';
import {Colors, styles} from '../../../theme';

type LoadNavigation = NativeStackNavigationProp<
    AppRootStackParamList,
    'Load'
>;

export const LoadScreen = () => {
    const navigation = useNavigation<LoadNavigation>();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('TabStack');
        }, 2000);
    },[]);

   return(
       <SafeAreaView style={styles.containerCenter}>
           <ActivityIndicator size={'large'} color={Colors.primary} />
       </SafeAreaView>
   );
};
