import React from 'react';
import { Button, Form, Icon } from 'native-base';
import { LOGIN_MUTATION } from '../AuthenticationQueries';
import { saveToken } from '../../../../util';
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
                            <Text style={{ fontSize: 65, color: '#FF006E', fontFamily: 'VINCHAND' }}>Kisses</Text>
                        </View>
                    </View>
                    <Form style={{ paddingLeft: 15, paddingRight: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                                <Icon active style={{color: '#7d7d7d'}} name='mail' type="Feather" />
                            </View>
                            <ModernInput 
                                style={{ flex: 9 }}
                                dark
                                label={'Email'}
                                customBorderColor={'#FF006E'}
                                labelStyle={{ color: '#FF006E' }}
                                onChangeText={value => this._handleInputChange('email', value)}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                                <Icon active style={{color: '#7d7d7d'}} name='lock' type="Feather" />
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
                    </Form>
                    <View style={{ marginTop: 30, paddingLeft: 15, paddingRight: 15 }}>
                        <Button large style={{ borderRadius: 50, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white'}} block onPress={this._tempLoginAccept}><Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>LOGIN</Text></Button>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
                        <Button transparent dark onPress={this._handleOnPressRegister}>
                            <Text style={{color: 'white'}}>DON’T HAVE AN ACCOUNT YET?  <Text style={{fontWeight: 'bold', color: 'white'}}>SIGN UP</Text></Text>
                        </Button>
                    </View>
                </View>

            </ScrollView>
        );
    }

    //TODO: This method is only used to test the access after the login to the home screen will be DELETED.
    _tempLoginAccept = () => {
        this.props.navigation.navigate('App');
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
        saveToken(token)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#292C2F',
        height: 100
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