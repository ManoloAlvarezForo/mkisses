import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Button } from 'native-base';

export default class AuthenticationSelect extends Component {
  static navigationOptions = { header: null }
  render() {
    return (
      <View style={{ backgroundColor: '#292C2F', flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
        <View style={{ flex: 8, height: 100, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }} >
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Image style={{width: 250, height: 250}} source={require('../../../images/logo.png')} />
            <Text style={{ fontSize: 85, color: '#FF006E', fontFamily: 'VINCHAND' }}>Kisses</Text>
          </View>
        </View>
        <View style={{ flex: 1, height: 10, alignItems: 'stretch', flexDirection: 'column' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ flex: 1, width: 100, marginLeft: 10, marginRight: 10 }}>
              <Button large style={{borderRadius: 50, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white' }} block onPress={this._handleOnPressLogin}><Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>LOGIN</Text></Button>
            </View>
            <View style={{ flex: 1, width: 100, marginLeft: 10, marginRight: 10  }}>
              <Button large style={{ borderRadius: 50, backgroundColor: 'transparent', borderWidth: 2, borderColor: '#FF006E' }} block onPress={this._handleOnPressRegister}><Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>SIGNUP</Text></Button>
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