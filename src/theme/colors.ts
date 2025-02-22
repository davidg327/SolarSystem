import {Platform} from 'react-native';

export const Colors = {
  primary: '#1DA1F2',
  background: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  text: '#282828',
  error: '#ff0000',
  success: '#5EA071',
  blackOpacity: Platform.OS === 'ios' ? '#00000050' : '#00000030',
};
