import {TextInput, View} from 'react-native';
import React from 'react';
import {searchBarStyles} from './SearchBarStyles';

const SearchBar = ({setQuery}) => {
  return (
    <TextInput
      style={searchBarStyles.input}
      placeholder="Search"
      onChangeText={text => setQuery(text)}
    />
  );
};

export default SearchBar;
