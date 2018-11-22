import React, { Component } from 'react'
import { Text, View, Button, AsyncStorage, StatusBar } from 'react-native'
import { Header, Left, Right, Icon, Body, Title, Card, CardItem, Content } from 'native-base';


class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header style={{ backgroundColor: '#292C2F' }}>
          <StatusBar backgroundColor='#292C2F' />
          <Left>
            <Icon style={{ color: 'white' }} name='menu' onPress={() => this.props.navigation.openDrawer()} />
          </Left>
          <Body>
            <Title>Kisses</Title>
          </Body>
          <Right>
            <Icon active onPress={this.signOutAsync} active name='user' type="Feather" style={{color: 'white'}} />
          </Right>
        </Header>
        <Content padder >
          <Card style={{backgroundColor: '#f7f7f7'}}>
            <CardItem style={{backgroundColor: '#f7f7f7'}} header>
              <Text style={{fontSize:20, fontWeight: 'bold'}}>Welcome</Text>
            </CardItem>
            <CardItem style={{backgroundColor: '#f7f7f7'}}>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </View>
    )
  }

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _testRequest = async () => {
    const response = await this.props.data;
  };
}

export default Home;
