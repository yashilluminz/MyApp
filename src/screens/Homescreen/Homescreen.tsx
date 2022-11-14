import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import type {RootState} from '~state/store';
import {useSelector} from 'react-redux';
import Loader from '~components/loader';
import {useNavigation} from '@react-navigation/native';
import Card from '~components/Card/card';
const Homescreen = () => {
  const productsData = useSelector((state: RootState) => state.products.data);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      {productsData === null ? (
        <Loader />
      ) : (
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          initialNumToRender={20}
          columnWrapperStyle={styles.flatlistContainer}
          data={productsData}
          keyExtractor={item => item.productDec}
          renderItem={({item, index}) => (
            <Card
              buttonPress={() =>
                navigation.navigate('details', {itemID: index})
              }
              image={item.image}
              mrp={item.price}
              name={item.brand}
              description={item.productDec}
              price={item.mrp}
              discount={item.discount}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  flatlistContainer: {
    justifyContent: 'space-between',
  },
});

export default Homescreen;
