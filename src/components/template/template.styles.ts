import { StyleSheet } from 'react-native';
import {Colors} from '../../theme';

export const homeTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInfo: {
    marginTop: 20,
  },
  flatList: {
    paddingBottom: 120,
  },
  textEmpty: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 20,
  },
});


export const favoriteTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
