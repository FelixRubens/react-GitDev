import React from 'react'
import { Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Search from './screens/SearchScreen.js'
import Main from './screens/MainScreen.js';

const tabs = createMaterialTopTabNavigator({
    Usuário: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: 'Usuário',
        }
    },
    Repositórios: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: 'Repositórios'
        }
    },
    Seguidores: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: 'Seguidores',
        }
    }
},
{
    tabBarOptions: {
        activeTintColor: '#f53649',
        inactiveTintColor: 'rgba(255,255,255,0.0)',
        pressColor: '#f53649',
        upperCaseLabel: false,

        labelStyle: {
            backgroundColor: 'transparent',
            fontWeight: 'bold',
            fontSize: 18,
            
        },

        style: {
            backgroundColor: '#232324',
            elevation: 0,
        },

        indicatorStyle: {
            backgroundColor: '#f53649',
            height: 5,
            borderRadius: 3,
            opacity: 0.7
        },

        tabStyle: {
            justifyContent: 'space-between',
            width: 'auto',
            paddingHorizontal: '3.65%',
            height: 45,
        }
    }
}
);

const stack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            headerShown: false,
        }
    },
    tabs: {
        screen: tabs,
        navigationOptions:  ({navigation}) => ({
            title:navigation.getParam('userData').login || 'ola',
            headerStyle: {
                backgroundColor: '#232324',
                elevation: 0,
                shadowOpacity: 0,
                height: 60,
            },
            headerTintColor: '#666',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                color: '#f53649'
            },
           headerBackTitleStyle:{
               color: '#f53649'
           },
        })
    },
});

export default createAppContainer(stack)

