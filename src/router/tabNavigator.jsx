import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import { HOME, PROFILE, SEARCH, CATEGORIES } from '../utils/routes';
import Profile from '../screens/profile';
import Search from '../screens/search';
import Categories from '../screens/categories';
import TabBarIcon from '../components/router/tabBarIcon';
import { Colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ size, focused, color }) => (
          <TabBarIcon
            name={route.name}
            color={color}
            size={size}
            focused={focused}
          />
        ),
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarStyle: { backgroundColor: Colors.BLACK },
        headerTintColor: Colors.WHITE,
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
      })}
    >
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
