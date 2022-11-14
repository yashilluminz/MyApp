import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/styles.common';

export const styles = StyleSheet.create({
  cardConnatinerMain: {
    width: scaledValue(170),
    height: scaledValue(200),
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 12,
    padding: 5,
    marginBottom: scaledValue(10),
  },
  cardImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  attriContainer: {
    flex: 1,
    marginVertical: scaledValue(5),
  },
  brandName: {
    fontSize: scaledValue(13),
    fontWeight: 'bold',
    color: '#000',
  },
  productDec: {
    fontSize: scaledValue(10),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  mrp: {
    fontSize: scaledValue(14),
    alignSelf: 'flex-end',
    marginBottom: -2,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: scaledValue(10),
    marginLeft: scaledValue(2),
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  discountPercentage: {
    fontSize: scaledValue(10),
    marginLeft: scaledValue(2),
    color: 'tomato',
  },
});
