import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

export default function ReposCard({
  title,
  description,
  updated,
  language,
  navigation,
  link
}) {
  
  const date = new Date(updated)
  return (
    <TouchableOpacity  
      style={reposStyles.container}
      onPress={() =>{
        navigation.navigate('Github', {link: link, title: title})
      }}
    >
      <Text style={reposStyles.title}>{title}</Text>
      <Text numberOfLines={3} style={reposStyles.description}>{description}</Text>
      <Text style={reposStyles.topic}>Ultima Atualização:</Text>
      <Text style={reposStyles.topicResponse}>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</Text>
      <Text style={reposStyles.topic}>Linguagem:</Text>
      <Text style={reposStyles.topicResponse}>{language}</Text>
    </TouchableOpacity>
  );
}

const reposStyles = StyleSheet.create({
  container: {
      flex: 1,
      alignContent: 'center',
      width: 250,
      height: 280,
      borderRadius: 20,
      backgroundColor: '#44475a',
      alignSelf: 'center',
      justifyContent: 'center',
      elevation: 3,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    overflow: 'scroll',
    paddingTop: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    maxHeight: 100,
  },
  description: {
    color: '#ccc',
    overflow: 'visible',
    textAlign: 'center',
    paddingTop: 5,
    paddingHorizontal: 5,
    maxHeight: 60,
  },

  topic: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 15,
  },

  topicResponse: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    paddingTop: 5,
    color: '#f53649'
  }
})