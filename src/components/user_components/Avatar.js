import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';


export default function Avatar({avatarUrl}) {
  return (
    <Image source={{uri: avatarUrl}} style={avatarStyle.avatar}/>
  );
}


const avatarStyle = StyleSheet.create({
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'rgba(245, 54, 73, 0.8)',
        marginTop: 30,
        alignSelf: 'center'
    }
})