import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SectionTitle from '../ui/sectionTitle';
import MovieItem from './movieItem';

const Section = ({ section }) => {
  return (
    <View style={styles.container}>
      <SectionTitle title={section.title} data={section.data} />
      <FlatList
        data={section.data}
        renderItem={({ item }) => <MovieItem movie={item} />}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Section;
