import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/styles.common';

export const styles = StyleSheet.create({
  container: {
    height: '100%',

    padding: 10,
    overflow: 'scroll',
  },
  bigImage: {
    alignSelf: 'center',
    height: '30%',
    width: '80%',
    borderRadius: 8,
    resizeMode: 'contain',
  },
  multipleImageView: {
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    overflow: 'scroll',
  },
  flatlistContainerView: {
    marginVertical: 20,
  },
  smallImage: {
    width: 100,
    margin: 6,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'rgba(36, 150, 255, 0.9)',
    height: 100,
    resizeMode: 'contain',
  },
  smallSelectedImage: {
    width: 100,
    margin: 6,
    borderWidth: 2,
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: scaledValue(22),
    fontWeight: 'bold',
    color: '#000',
  },
  detailsContianer: {
    marginHorizontal: 8,
  },
  productDec: {
    fontSize: scaledValue(16),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  mrp: {
    fontSize: scaledValue(18),
    alignSelf: 'flex-end',
    marginBottom: -2,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: scaledValue(12),
    marginLeft: scaledValue(2),
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  discountPercentage: {
    fontSize: scaledValue(14),
    marginLeft: scaledValue(2),
    color: 'tomato',
  },
});
