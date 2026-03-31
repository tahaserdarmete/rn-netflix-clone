//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { screenHeight } from '../../utils/constants';

// create a component
const Button = props => {
  const { title } = props;

  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SECOND,
    padding: 10,
    height: screenHeight * 0.07,
    margin: 10,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
});

//make this component available to the app
export default Button;
