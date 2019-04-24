import React, { Component } from 'react'
import { Text, View, AsyncStorage, StatusBar, FlatList, Image, StyleSheet } from 'react-native'
import { Header, Left, Right, Icon, Body, Title, Card, CardItem, Content, Button } from 'native-base';
import { getImages } from '../../images/imagesUtil'

const products = [
    { title: 'Labial mejora labios', content: 'Content example' },
    { title: 'Sombra transparente', content: 'Content example' },
    { title: 'Labial de Iluminacion', content: 'Content example' },
    { title: 'Polvo de Estrellas', content: 'Content example' },
    { title: 'Rubor Rosa', content: 'Content example' },
    { title: 'Rojo Imgagen Labial', content: 'Content example' },
    { title: 'Cosmeticos de Primera', content: 'Content example' },
    { title: 'El Encanto Rubor', content: 'Content example' },
    { title: 'Labo Labios', content: 'Content example' },
    { title: 'Crema de Maquillaje', content: 'Content example' },
    { title: 'Maquillaje Juvenil', content: 'Content example' },
    { title: 'Lomas', content: 'Content example' },
    { title: 'Labial Perfecto', content: 'Content example' },
    { title: 'Noche de Luna', content: 'Content example' },
    { title: 'Loreal Products', content: 'Content example' },
    { title: 'Maquillaje Menta', content: 'Content example' },
    { title: 'Labial Forever', content: 'Content example' },
    { title: 'Maquillaje Lirios', content: 'Content example' },
    { title: 'Mimos de Piel', content: 'Content example' },
    { title: 'Palapiel', content: 'Content example' },
    { title: 'Rosa Meso', content: 'Content example' },
    { title: 'Maquillahe', content: 'Content example' }

]

class Product extends Component {
    render() {
        return (
            <Card style={styles.bordered}>
                <CardItem style={styles.bordered} >
                    <Left>
                        <Body>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{this.props.title}</Text>
                            <Text note>{this.props.content}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={getImages()} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={styles.bordered}>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Button small style={{ borderRadius: 50, backgroundColor: '#FF006E' }} block>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', marginLeft: 15, marginRight: 0 }}>Add to </Text>
                            <Icon active onPress={this._signOutAsync} active name='shopping-cart' type="Feather" style={{ color: 'white', fontSize: 22, marginLeft: 0 }} />
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Header style={{ backgroundColor: '#292C2F' }}>
                    <StatusBar backgroundColor='#292C2F' />
                    <Left>
                        <Icon style={{ color: '#FF006E' }} type="Feather" name='menu' onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body>
                        <Title>Product's Shop</Title>
                    </Body>
                    <Right>
                        <Icon active onPress={this._signOutAsync} active name='shopping-cart' type="Feather" style={{ color: 'white', fontSize: 22 }} />
                    </Right>
                </Header>
                <Content padder>
                    <FlatList
                        data={products}
                        renderItem={({ item, index }) => <Product
                            key={index}
                            ImageUrl={item.ImageUrl}
                            title={item.title}
                            content={`${item.content} for product ${item.title} ${index}`} />}
                    />
                </Content>
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

const styles = StyleSheet.create({
    bordered: {
      borderRadius: 6,
    }
  });

export default Profile;
