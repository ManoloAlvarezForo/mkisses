import React from 'react';
import { Container, Button, Content, Form, Item, Input } from 'native-base';
import { LOGIN_MUTATION } from './LoginQueries';
import { _saveToken } from '../../../../util';
import { Text } from 'react-native';
import { graphql } from 'react-apollo';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true, // switch between Login and SignUp
            email: '',
            password: '',
            name: '',
            emailError: false,
            passwordError: false,
        }
    }

    render() {
        const {
            email,
            password,
            emailError,
            passwordError
        } = this.state;

        return (
            <Container>
                <Content>
                    <Form>
                        <Item error={emailError}>
                            <Input
                                placeholder="Email"
                                onChangeText={value => this._handleInputChange('email', value)}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </Item>
                        <Item error={passwordError}>
                            <Input
                                placeholder="Password"
                                onChangeText={value => this._handleInputChange('password', value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                            />
                        </Item>
                    </Form>

                    <Button full onPress={this._handleSubmit}>
                        <Text>LogIn</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    _handleSubmit = async () => {
        const { email, password } = this.state;
        const response = await this.props.login(email, password);
        this._confirm(response.data)
      };

    _handleInputChange = (field, value) => {
        const newState = {
            ...this.state,
            [field]: value,
        };
        this.setState(newState);
    };

    _confirm = async data => {
        this._saveUserData(data.login.token);
        this.props.navigation.navigate('App');
    }

    _saveUserData = token => {
        _saveToken(token)
    }
}

export default graphql(
    LOGIN_MUTATION,
    {
      props: ({ mutate }) => ({
        login: (email, password) => mutate({ variables: { email, password } }),
      }),
    },
  )(Login);