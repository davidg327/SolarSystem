import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';

export const searchStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  input: {
    borderColor: Colors.black,
    borderRadius: 10,
    fontSize: 16,
    width: '85%',
  },
});
