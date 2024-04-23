import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './src/SplashScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginPage from './src/LoginPage';
import HomePage from './src/HomePage';
import Search from './src/Search';
import Profile from './src/Profile';
import RootPage from './src/Root';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="login" component={LoginPage} />
          <Stack.Screen name="root" component={RootPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
