import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { Button, Form, Icon } from 'native-base';
import { graphql } from 'react-apollo';
import { SIGNUP_MUTATION } from '../AuthenticationQueries';
import { _saveToken } from '../../../../util';

import ModernInput from '../../Input/ModernInput/ModernInput'

class SignUp extends Component {
  static navigationOptions = {
    title: 'Sign Up',
    headerStyle: {
      backgroundColor: "#292C2F"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#ffff",
    },
    headerTintColor: "#fff",
    animationEnabled: true
  }
  
  constructor(props) {
    super(props);
    this.state = {
      login: true, // switch between Login and SignUp
      email: '',
      password: '',
      repeatPassword: '',
      name: '',
      emailError: false,
      passwordError: false,
      repeatPasswordError: false,
      nameError: false,
      marginLeftDefault: 10,
      marginRightDefault: 15
    }
  }
  render() {
    const {
      emailError,
      passwordError,
      repeatPasswordError,
      nameError,
      marginLeftDefault,
      marginRightDefault
    } = this.state;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <StatusBar backgroundColor='#292C2F' />
        <View style={styles.content}>
          <Form style={{ paddingLeft: 15, paddingRight: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Icon style={{color: '#292C2F'}} active name='user' type="Feather" />
              </View>
              <ModernInput style={{ flex: 9 }}
                label={'Name'}
                customBorderColor={'#ED4C5C'}
                labelStyle={{ color: '#ED4C5C' }}
                onChangeText={value => this._handleInputChange('name', value)}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Icon style={{color: '#292C2F'}} active name='mail' type="Feather" />
              </View>
              <ModernInput style={{ flex: 9 }}
                label={'Email'}
                customBorderColor={'#ED4C5C'}
                labelStyle={{ color: '#ED4C5C' }}
                onChangeText={value => this._handleInputChange('email', value)}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Icon style={{color: '#292C2F'}} active name='lock' type="Feather" />
              </View>
              <ModernInput
                style={{ flex: 9 }}
                label={'Password'}
                customBorderColor={'#ED4C5C'}
                labelStyle={{ color: '#ED4C5C' }}
                isPassword={true}
                onChangeText={value => this._handleInputChange('password', value)}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Icon style={{color: '#292C2F'}} active name='lock' type="Feather" />
              </View>
              <ModernInput
                style={{ flex: 9 }}
                label={'Repeat Password'}
                customBorderColor={'#ED4C5C'}
                labelStyle={{ color: '#ED4C5C' }}
                isPassword={true}
                onChangeText={value => this._handleInputChange('repeatPassword', value)}
              />
            </View>
          </Form>
          <View style={{ marginTop: 10, paddingLeft: 15, paddingRight: 15 }}>
          <View style={{ marginTop: 20 }}>
            <Button style={{ borderRadius: 5, backgroundColor: '#ED4C5C' }} block onPress={this._handleSubmit}>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>CREATE ACCOUNT</Text>
            </Button>
          </View>
          <View style={{marginTop: 40, flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <Button transparent dark onPress={this._handleOnPressLogin}>
              <Text>ALREADY HAVE AN ACCOUNT?  LOG IN</Text>
            </Button>
          </View>
          </View>
        </View>

      </ScrollView>
    )
  }

  _handleSubmit = async () => {
    const { name, email, password } = this.state;
    const response = await this.props.signup(name, email, password);
    this._confirm(response.data)
  };

  _confirm = async data => {
    this._saveUserData(data.signup.token);
    this.props.navigation.navigate('App');
  }

  _saveUserData = token => {
    _saveToken(token)
  }

  _handleOnPressLogin = () => {
    this.props.navigation.navigate('Login');
  }

  _handleInputChange = (field, value) => {
    const newState = {
      ...this.state,
      [field]: value,
    };
    this.setState(newState);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
  content: {
    paddingTop: 10
  }
});

export default graphql(
  SIGNUP_MUTATION,
  {
    props: ({ mutate }) => ({
      signup: (name, email, password) => mutate({ variables: { name, email, password } }),
    }),
  },
)(SignUp);