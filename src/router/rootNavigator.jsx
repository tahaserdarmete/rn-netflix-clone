import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GetStarted from '../screens/getStarted';
import {
  ACCOUNTS,
  GETSTARTED,
  MOVIES,
  TABMENU,
  MOVIEDETAIL,
} from '../utils/routes';
import Accounts from '../screens/accounts';
import TabNavigator from './tabNavigator';
import { Colors } from '../theme/colors';
import { Add } from 'iconsax-react-nativejs';
import Movies from '../screens/movies';
import MovieDetail from '../screens/movies/movieDetail';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.WHITE,
        headerBackTitle: 'Back',
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name={GETSTARTED}
        component={GetStarted}
      />

      <Stack.Screen
        options={({ route, navigation }) => ({
          headerRight: () => <Add color={Colors.WHITE} size={30} />,
        })}
        name={ACCOUNTS}
        component={Accounts}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name={TABMENU}
        component={TabNavigator}
      />

      <Stack.Screen name={MOVIES} component={Movies} />
      <Stack.Screen name={MOVIEDETAIL} component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
