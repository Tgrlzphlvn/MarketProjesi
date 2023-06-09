import {FlatList} from 'react-native';
import React from 'react';
import Card from '../Card/Card';
import {productListStyles} from './ProductListStyles';

const ProductList = ({data}) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Card item={item} />}
    />
  );
};

export default ProductList;
