/* eslint-disable react-hooks/rules-of-hooks */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './heder.styles';
import {useNavigation} from '@react-navigation/native';

import {HeaderIprop} from './header.types';
import {SEARCH} from '~assets';

const Header: React.FC<HeaderIprop> = ({title, backbutton}) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image style={styles.backIcon} source={backbutton} />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
      <TouchableOpacity>
        <Image style={styles.searchImage} source={SEARCH} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
