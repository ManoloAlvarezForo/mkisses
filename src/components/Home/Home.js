import React, { Component } from 'react'
import { Text, View, Button, AsyncStorage } from 'react-native'


class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>
        <Button title="Logout" onPress={this._signOutAsync} />
        <Button title="Test request" onPress={this._testRequest} />
      </View>
    )
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _testRequest = async () => {
    const response = await this.props.data;
  };
}

export default Home;
