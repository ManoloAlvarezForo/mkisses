import React from 'react';
import { Button, Form, Icon } from 'native-base';
import { LOGIN_MUTATION } from '../AuthenticationQueries';
import { _saveToken } from '../../../../util';
import { graphql } from 'react-apollo';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import ModernInput from '../../Input/ModernInput/ModernInput';

class Login extends React.Component {
    static navigationOptions = { header: null }
    constructor(props) {
        super(props);
        this.state = {
            login: true, // switch between Login and SignUp
            email: '',
            password: '',
            name: '',
            emailError: false,
            passwordError: false,
            marginLeftDefault: 10,
            marginRightDefault: 15,
            value: ''
        }
    }

    
    handleTextChange = (newText) => this.setState({ value: newText });

    render() {
        const {
            emailError,
            passwordError,
            marginLeftDefault,
            marginRightDefault
        } = this.state;

        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <View style={styles.content}>
                    <View style={{ flex: 1, height: 300, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }} >
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 150, height: 150 }} source={require('../../../images/logo.png')} />
                            <Text style={{ fontSize: 65, color: '#ED4C5C', fontFamily: 'VINCHAND' }}>Kisses</Text>
                        </View>
                    </View>
                    <Form style={{ paddingLeft: 15, paddingRight: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                                <Icon active name='mail' type="Feather" />
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
                                <Icon active name='lock' type="Feather" />
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
                    </Form>
                    <View style={{ marginTop: 30, paddingLeft: 15, paddingRight: 15 }}>
                        <Button style={{ borderRadius: 5, backgroundColor: '#292C2F' }} block onPress={this._handleSubmit}><Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>LOGIN</Text></Button>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
                        <Button transparent dark onPress={this._handleOnPressRegister}>
                            <Text>DON’T HAVE AN ACCOUNT YET?  SIGN UP</Text>
                        </Button>
                    </View>
                </View>

            </ScrollView>
        );
    }

    _handleOnPressRegister = () => {
        this.props.navigation.navigate('SignUp');
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
    },
    content: {
    }
});

export default graphql(
    LOGIN_MUTATION,
    {
        props: ({ mutate }) => ({
            login: (email, password) => mutate({ variables: { email, password } }),
        }),
    },
)(Login);