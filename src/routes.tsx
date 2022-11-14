/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen/Homescreen';
import {ProductDetails} from './screens/ProductDetail/productDetails';
import {useDispatch} from 'react-redux';
import {IpropDataType, IProducts} from '~state/features/intialstate';
import {setLoading, setProducts} from '~state/features/productsSlice';
import Header from '~components/Header/header';

export type HomeStackNavigatorParamList = {
  home: undefined;
  details: {
    id: number;
  };
};

const Routes = () => {
  const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();
  let dataArr: IpropDataType[] = [];
  let processedRsp: IpropDataType = {
    brand: '',
    productDec: '',
    image: '',
    mrp: 15,
    price: 15,
    discount: '',
    imagesArr: undefined,
  };
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const data = await fetch(
        'https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e',
      );
      const res = await data.json();

      res.products.forEach((item: IProducts) => {
        dispatch(setLoading(true));
        processedRsp = {
          brand: item.brand,
          image: item.searchImage,
          productDec: item.productName,
          discount: item.discountDisplayLabel,
          price: item.price,
          mrp: item.mrp,
          imagesArr: item.images,
        };
        dataArr.push(processedRsp);
      });
      dispatch(setProducts(dataArr));
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <NavigationContainer>
      <Header title="Ecomm" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Homescreen} />
        <Stack.Screen name="details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
