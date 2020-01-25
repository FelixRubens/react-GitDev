import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Avatar from '../components/user_components/Avatar.js'

export default function MainScreen({navigation}) {

  const avatar_url = navigation.getParam('userData').avatar_url
  return (
    <>
    <LinearGradient colors={['#232324', 'transparent']} style={mainStyles.gradientTop}></LinearGradient>
    <ScrollView style={mainStyles.container}
      overScrollMode={'never'}
      >
      <Avatar avatarUrl={avatar_url}/>
    </ScrollView>
    <LinearGradient colors={['transparent', '#232324']} style={mainStyles.gradientBot}></LinearGradient>
    </>
  );
}

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232324', 
  },

  gradientTop: {
    position: 'absolute',
    zIndex: 5,
    height: 60,
    width: 400
  },

  gradientBot: {
    position: 'absolute',
    zIndex: 5,
    height: 90,
    width: 400,
    bottom: 0
  }
})