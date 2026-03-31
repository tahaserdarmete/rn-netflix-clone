//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { ACCOUNTS } from '../../utils/routes';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { Colors } from '../../theme/colors';
import Button from '../../components/ui/button';
import { screenHeight } from '../../utils/constants';

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <View style={defaultScreenStyle.container}>
      <ImageBackground
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.image}
        source={require('../../assets/images/first.png')}
      >
        <Image
          source={require('../../assets/images/grad.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.buttonContainer}>
          <Text style={styles.title}>
            Unlimited entertainment, one low price
          </Text>

          <Text style={styles.description}>
            All of Netflix, starting at just $149
          </Text>

          <Button
            onPress={() => navigation.navigate(ACCOUNTS)}
            title="GET STARTED"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  title: {
    color: Colors.WHITE,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    height: screenHeight * 0.3,
    width: '100%',
    bottom: 0,
    justifyContent: 'space-evenly',
    position: 'absolute',
  },
  description: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
});

export default GetStarted;
