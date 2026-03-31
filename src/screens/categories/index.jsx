import { View, Text } from 'react-native';
import React from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';

const Categories = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text style={{ color: 'white' }}>Categories</Text>
    </View>
  );
};

export default Categories;
