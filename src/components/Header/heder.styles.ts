import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/styles.common';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
  },
  searchImage: {
    width: scaledValue(30),
    height: scaledValue(30),
  },
  backIcon: {
    width: scaledValue(30),
    height: scaledValue(30),
  },
});
