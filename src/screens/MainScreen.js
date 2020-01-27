import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Carousel from 'react-native-snap-carousel';

import Avatar from '../components/user_components/Avatar.js'
import ReposCard from '../components/user_components/Repos_card.js'

export default function MainScreen({navigation}) {

  const colors = ['#282a36', 'transparent', 'transparent', 'transparent']
  const avatar_url = navigation.getParam('userData').avatar_url
  const userRepos = navigation.getParam('userRepos')

  return (
    <>
      <LinearGradient colors={colors} style={mainStyles.gradientTop}/>
      <ScrollView style={mainStyles.container}
        overScrollMode={'never'}
      >
        <Avatar avatarUrl={avatar_url}/>
        <Text style={mainStyles.topics}>Repositórios:</Text>
        <Carousel
          data={userRepos}
          renderItem={({item, index}) => (
                        <ReposCard 
                          title = {item.name}
                          description = {item.description}
                          author = {item.owner.login}
                          language = {item.language}
                          navigation= {navigation}
                          link={item.html_url}
                        />
                      )
                    }
          sliderWidth={360}
          itemWidth={250}
          layout={'default'}
        />
      </ScrollView>
    </>
  );
}

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36', 
  },

  gradientTop: {
    position: 'absolute',
    zIndex: 5,
    height: 30,
    width: 400
  },

  gradientBot: {
    position: 'absolute',
    zIndex: 5,
    height: 60,
    width: 400,
    bottom: 0
  },

  topics: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#f53649',
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 5
  }
})