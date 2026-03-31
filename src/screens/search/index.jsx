import { View, Text } from 'react-native';
import React from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';

const Search = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text style={{ color: 'white' }}>Search</Text>
    </View>
  );
};

export default Search;
