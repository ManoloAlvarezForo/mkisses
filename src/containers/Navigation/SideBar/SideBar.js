import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native'
import { DrawerItems } from "react-navigation";

const CustomDrawerContentComponent = (props) => (
  <SafeAreaView style={{backgroundColor: '#292C2F',flex: 10 }}>
    <View style={{ height: 180, backgroundColor: '#292C2F', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 65, color: '#FF006E', fontFamily: 'VINCHAND' }}>Kisses</Text>
    </View>
    <ScrollView style={{backgroundColor: '#292C2F'}}>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})

export default CustomDrawerContentComponent;