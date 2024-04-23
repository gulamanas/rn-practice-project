import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const LoginPage = ({navigation}) => {
  return (
    <View>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
