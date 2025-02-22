import React from 'react';
import {View} from 'react-native';
import {IconComponent, TextInputComponent} from '../../atoms';
import {Colors} from '../../../theme';
import {searchStyles} from './search.styles.ts';

interface ISearch {
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
    search: () => void;
}

export const Search = ({value, onChange, placeholder, search}: ISearch) => {
  return (
      <View style={searchStyles.container}>
          <TextInputComponent
              value={value}
              onChange={onChange}
              styles={searchStyles.input}
              placeholder={placeholder}
              placeholderTextColor={Colors.black}
              onSubmitEditing={search}
          />
          <IconComponent name={'search'} color={Colors.black} size={20} onPress={search}/>
      </View>
  )
};
