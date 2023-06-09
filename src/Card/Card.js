import {Image, Text, View} from 'react-native';
import React from 'react';
import {cardStyle} from './CardSyles';

const Card = ({item}) => {
  return (
    <View style={cardStyle.container}>
      <View style={cardStyle.card}>
        <Image style={cardStyle.image} source={{uri: item.imgURL}} />
      </View>
      <Text style={cardStyle.productName}>{item.title}</Text>
      <View style={cardStyle.row}>
        <Text style={cardStyle.price}>{item.price}</Text>
        <Text style={cardStyle.stockControlText}>{item.inStock === true ? "Var":"Yok"}</Text>
      </View>
    </View>
  );
};

export default Card;
