import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

export default Login;
