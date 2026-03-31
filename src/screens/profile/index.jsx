import { View, Text } from 'react-native';
import React from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';

const Profile = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text style={{ color: 'white' }}>Profile</Text>
    </View>
  );
};

export default Profile;
