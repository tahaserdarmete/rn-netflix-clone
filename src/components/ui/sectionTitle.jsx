import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { MOVIES } from '../../utils/routes';

const SectionTitle = ({ title, data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(MOVIES, { data: data })}
      >
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '500',
  },
  seeAll: {
    color: Colors.YELLOW,
    fontWeight: '600',
  },
});

export default SectionTitle;
