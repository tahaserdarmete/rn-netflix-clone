import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { screenWidth, screenHeight } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import { EmojiHappy } from 'iconsax-react-nativejs';
import { useNavigation } from '@react-navigation/native';
import { TABMENU } from '../../utils/routes';

const AccountCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(TABMENU)}
        style={[styles.box, { backgroundColor: item.color }]}
      >
        <EmojiHappy size={100} color={Colors.WHITE} />
      </Pressable>

      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.5,
    marginVertical: 20,
  },
  box: {
    width: screenWidth * 0.38,
    height: screenWidth * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: Colors.WHITE,
    marginTop: 10,
  },
});

export default AccountCard;
