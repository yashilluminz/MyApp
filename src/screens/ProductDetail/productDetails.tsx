import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './productDestialstyles';
import {useSelector} from 'react-redux';
import {RootState} from '~state/store';
import {IpropDataType} from '~state/features/intialstate';
export const ProductDetails = ({route}: any) => {
  const [currentDisplayImage, setCurrentDisplayImage] = useState<number>(0);
  const productsData = useSelector((state: RootState) => state.products.data);
  const {itemID} = route?.params;
  var productDetail: IpropDataType = {
    brand: '',
    productDec: '',
    image: '',
    mrp: 15,
    price: 15,
    discount: '',
    imagesArr: [{src: '', view: ''}],
  };
  if (productsData != null) {
    productDetail = productsData[itemID];
  }

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.bigImage}
          source={{uri: productDetail?.imagesArr[currentDisplayImage]?.src}}
        />
        <View style={styles.flatlistContainerView}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={productDetail.imagesArr}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => setCurrentDisplayImage(index)}>
                <Image
                  key={index}
                  style={
                    currentDisplayImage !== index
                      ? styles.smallSelectedImage
                      : styles.smallImage
                  }
                  source={{uri: item.src}}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.detailsContianer}>
          <Text style={styles.productName}>{productDetail.brand}</Text>
          <Text style={styles.productDec}>{productDetail.productDec}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.mrp}>{productDetail.price}</Text>
            <Text style={styles.originalPrice}>Rs.{productDetail.mrp}</Text>
            <Text style={styles.discountPercentage}>
              {productDetail.discount}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
