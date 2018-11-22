import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { Button, Form, Icon, Left, Header, Body, Title } from 'native-base';
import { graphql } from 'react-apollo';
import { SIGNUP_MUTATION } from '../AuthenticationQueries';
import { saveToken } from '../../../../util';

import ModernInput from '../../Input/ModernInput/ModernInput'

class SignUp extends Component {
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
        <Header androidStatusBarColor="#292C2F" style={{backgroundColor: '#292C2F'}}>
        <StatusBar backgroundColor='#292C2F' />
          <Left>
            <Button transparent>
              <Icon name='arrow-back' active/>
            </Button>
          </Left>
          <Body>
            <Title style={{fontWeight: 'bold'}}>Sign Up</Title>
          </Body>
        </Header>
        
        <View style={{paddingTop: 40}}>
          <Form style={{ paddingLeft: 15, paddingRight: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Icon active style={{color: '#7d7d7d'}} active name='user' type="Feather" />
              </View>
              <ModernInput style={{ flex: 9 }}
                label={'Name'}
                dark
                customBorderColor={'#FF006E'}
                labelStyle={{ color: '#FF006E' }}
                onChangeText={value => this._handleInputChange('name', value)}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Icon active style={{color: '#7d7d7d'}} active name='mail' type="Feather" />
              </View>
              <ModernInput style={{ flex: 9 }}
                label={'Email'}
                dark
                customBorderColor={'#FF006E'}
                labelStyle={{ color: '#FF006E' }}
                onChangeText={value => this._handleInputChange('email', value)}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Icon active style={{color: '#7d7d7d'}} active name='lock' type="Feather" />
              </View>
              <ModernInput
                style={{ flex: 9 }}
                dark
                label={'Password'}
                customBorderColor={'#FF006E'}
                labelStyle={{ color: '#FF006E' }}
                isPassword={true}
                onChangeText={value => this._handleInputChange('password', value)}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Icon active style={{color: '#7d7d7d'}} active name='lock' type="Feather" />
              </View>
              <ModernInput
                style={{ flex: 9 }}
                dark
                label={'Repeat Password'}
                customBorderColor={'#FF006E'}
                labelStyle={{ color: '#FF006E' }}
                isPassword={true}
                onChangeText={value => this._handleInputChange('repeatPassword', value)}
              />
            </View>
          </Form>
          <View style={{ marginTop: 25, paddingLeft: 15, paddingRight: 15 }}>
          <View style={{ marginTop: 20 }}>
            <Button large style={{ borderRadius: 50, backgroundColor: 'transparent', borderColor: '#FF006E', borderWidth: 2 }} block onPress={this._handleSubmit}>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>CREATE ACCOUNT</Text>
            </Button>
          </View>
          <View style={{marginTop: 40, flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <Button transparent dark onPress={this._handleOnPressLogin}>
              <Text style={{color: 'white'}}>ALREADY HAVE AN ACCOUNT?   <Text style={{fontWeight: 'bold'}}>LOG IN</Text></Text>
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
    saveToken(token)
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
    // flex: 1,
    // paddingTop: 30,
    // paddingLeft: 5,
    backgroundColor: '#292C2F',
  },
  content: {
    // paddingTop: 10
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