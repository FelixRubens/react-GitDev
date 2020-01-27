import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Search from './screens/SearchScreen.js'
import Main from './screens/MainScreen.js'
import Github from './screens/GithubScreen'

const stack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            headerShown: false,
        }
    },
    Main: {
        screen: Main,
        navigationOptions:  ({navigation}) => ({
            title:navigation.getParam('userData').login || 'ola',
            headerStyle: {
                backgroundColor: '#282a36',
                elevation: 0,
                shadowOpacity: 0,
                height: 60,
            },
            headerTintColor: '#666',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                color: 'white'
            },
           headerBackTitleStyle:{
               color: 'white'
           },
        })
    },
    Github: {
        screen: Github,
        navigationOptions:  ({navigation}) => ({
            title:navigation.getParam('title'),
            headerStyle: {
                backgroundColor: '#282a36',
                elevation: 0,
                shadowOpacity: 0,
                height: 70,
            },
            headerTintColor: '#666',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',                
            },
           headerBackTitleStyle:{
               color: 'white'
           },
        })
    }
});

export default createAppContainer(stack)

