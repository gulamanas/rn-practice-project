import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './home/HomePage';
import Search from './home/Search';
import Profile from './home/Profile';

const Tab = createBottomTabNavigator();

const RootPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default RootPage;

const styles = StyleSheet.create({});
