import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './card.styles';
import {ICardProps} from './card.types';

const Card: React.FC<ICardProps> = props => {
  return (
    <TouchableOpacity onPress={props.buttonPress}>
      <View style={styles.cardConnatinerMain}>
        <Image style={styles.cardImage} source={{uri: props.image}} />
        <View style={styles.attriContainer}>
          <Text style={styles.brandName}>{props.name}</Text>
          <Text style={styles.productDec} numberOfLines={1}>
            {props.description}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.mrp}>Rs.{props.mrp}</Text>
            <Text style={styles.originalPrice}>Rs.{props.price}</Text>
            <Text style={styles.discountPercentage}>{props.discount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
