import { Dimensions, StyleSheet } from 'react-native';
import {Colors} from "../../../theme";

const {width, height} = Dimensions.get('window');

export const cardPlanetStyles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.2,
    marginTop: 20,
    alignSelf: 'center',
  },
  image: {
    borderRadius: 20,
  },
  gradiant: {
    width: width * 0.9,
    height: height * 0.2,
    borderRadius: 20,
  },
  text: {
    position: 'absolute',
    bottom: 20,
    color: Colors.white,
    marginLeft: 20,
  },
});
