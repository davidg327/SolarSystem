import { StyleSheet } from 'react-native';
import {Colors} from '../../theme';

export const homeTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '5%',
    marginBottom: 10,
  },
  icon: {
    marginRight: '5%',
  },
  containerCleanFilter: {
    alignSelf: 'flex-end',
    marginRight: '5%',
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

export const detailPlanetTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '30%',
  },
  containerInfo: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  containerHeaderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
    width: '80%',
  },
  info: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    width: '50%',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '55%'
  },
  containerOnlyInfo: {
    marginTop: 20,
    marginBottom: 80,
  },
  containerMoons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  infoMoon: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    width: '30%',
  },
});
