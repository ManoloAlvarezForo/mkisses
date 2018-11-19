import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
// import { Button } from 'react-native-elements'
import { Button, Form, Icon } from 'native-base';

export default class AuthenticationSelect extends Component {
  static navigationOptions = { header: null }
  render() {
    return (
      <View style={{ backgroundColor: '#37393B', flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
        <View style={{ flex: 8, height: 100, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }} >
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Image style={{width: 200, height: 200}} source={require('../../../images/logo.png')} />
            <Text style={{ fontSize: 85, color: '#ED4C5C', fontFamily: 'VINCHAND' }}>Kisses</Text>
          </View>
        </View>
        <View style={{ flex: 1, height: 10, alignItems: 'stretch', flexDirection: 'column' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ flex: 1, width: 100 }}>
              <Button large style={{ backgroundColor: '#292C2F' }} block onPress={this._handleOnPressLogin}><Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>LOGIN</Text></Button>
            </View>
            <View style={{ flex: 1, width: 100 }}>
              <Button large style={{ backgroundColor: '#ED4C5C' }} block onPress={this._handleOnPressRegister}><Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>SIGNUP</Text></Button>
            </View>
          </View>
        </View>
      </View>
    )
  }

  _handleOnPressLogin = () => {
    this.props.navigation.navigate('Login');
  }

  _handleOnPressRegister = () => {
    this.props.navigation.navigate('SignUp');
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   box1: {
//     backgroundColor: '#2196F3'
//   },
//   box2: {
//     backgroundColor: '#8BC34A'
//   },
//   box3: {
//     backgroundColor: '#e3aa1a'
//   }
// });

