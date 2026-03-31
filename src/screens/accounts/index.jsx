import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { Colors } from '../../theme/colors';
import AccountCard from '../../components/accounts/accountCard';
import { screenHeight } from '../../utils/constants';

const Accounts = () => {
  const accounts = [
    {
      id: 1,
      title: 'Drashti',
      color: '#093C4F',
    },
    {
      id: 2,
      title: 'Bhavesh',
      color: '#E5B20B',
    },
    {
      id: 3,
      title: 'Aditi',
      color: '#5DBA7D',
    },
    {
      id: 4,
      title: 'Prit',
      color: '#E50714',
    },
    {
      id: 5,
      title: 'Kavya',
      color: '#0A6FE5',
    },
  ];

  return (
    <View style={defaultScreenStyle.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: screenHeight * 0.05,
          paddingVertical: 20,
        }}
      >
        <Text style={styles.text}>Who's Watching?</Text>
      </View>

      <FlatList
        numColumns={2}
        data={accounts}
        renderItem={({ item }) => <AccountCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.WHITE,
    fontSize: 25,
    fontWeight: '500',
  },
});

export default Accounts;
