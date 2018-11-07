import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
// import { Button } from 'react-native-elements'

export default class AuthenticationSelect extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', width: 100}}>
                <View style={{ width: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 100, backgroundColor: 'skyblue' }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    box1: {
      backgroundColor: '#2196F3'
    },
    box2: {
      backgroundColor: '#8BC34A'
    },
    box3: {
      backgroundColor: '#e3aa1a'
    }
  });
  
