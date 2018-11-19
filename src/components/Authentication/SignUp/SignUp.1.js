import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { Button } from 'react-native-elements';
import { Button as ButtonBase } from 'native-base';
import { graphql } from 'react-apollo';
import { SIGNUP_MUTATION } from '../AuthenticationQueries';
import { _saveToken } from '../../../../util';

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
      <Container style={{ paddingRight: 40, paddingLeft: 20 }}>
        <Content style={{ marginTop: 50 }}>
          <Form>
            <Item stackedLabel error={nameError}>
              <Icon style={{ marginLeft: marginLeftDefault }} active name='user' type="Feather" />
              <Label>Name</Label>
              <Input
                placeholder="Add your name"
                onChangeText={value => this._handleInputChange('name', value)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Item>
            <Item stackedLabel error={emailError}>
              <Icon style={{ marginLeft: marginLeftDefault }} active name='mail' type="Feather" />
              <Label>Email</Label>
              <Input
                placeholder="Add your email"
                onChangeText={value => this._handleInputChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Item>
            <Item stackedLabel error={passwordError}>
              <Icon style={{ marginLeft: marginLeftDefault }} active name='lock' type="Feather" />
              <Label>Password</Label>
              <Input
                placeholder="Add your password"
                onChangeText={value => this._handleInputChange('password', value)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </Item>
            <Item stackedLabel error={repeatPasswordError}>
              <Icon style={{ marginLeft: marginLeftDefault }} active name='lock' type="Feather" />
              <Label>Repeat Password</Label>
              <Input
                placeholder="Repeat your new password"
                onChangeText={value => this._handleInputChange('repeatPassword', value)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </Item>
          </Form>
          <View style={{ marginTop: 60 }}>
            <Button rounded onPress={this._handleSubmit} color="white" backgroundColor="#ED4C5C" title='CREATE ACCOUNT' />
          </View>
          <View style={{alignSelf: 'center', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 40 }}>
            <ButtonBase transparent dark onPress={this._handleOnPressLogin}>
              <Text>ALREADY HAVE AN ACCOUNT?  LOG IN </Text>
            </ButtonBase>
          </View>
        </Content>
      </Container>
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

export default graphql(
  SIGNUP_MUTATION,
  {
    props: ({ mutate }) => ({
      signup: (name, email, password) => mutate({ variables: { name, email, password } }),
    }),
  },
)(SignUp);