import React, { Component } from 'react'
import { createStackNavigator, createAppContainer} from '@react-navigation'
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AboutModal from './screens/AboutModal';
import ContactScreen from './screens/ContactScreen';

import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import DrawerButton from './components/DrawerButton';

const HomeStack = createStackNavigator({
	Home: {
        screen:HomeScreen,
        navigationOptions:({navigation}) => ( {
            headerLeft: <DrawerButton  navigation={navigation}/>
        })
    },
	Detail: {
        screen:DetailScreen
    }
}, {
	initialRouteName: "Home",
  headerLayoutPreset:"center",
  defaultNavigationOptions:{
    headerBackTitle: null,
  headerTintColor: '#000',
  headerTitleStyle:{
      fontWeight:'bold'
  }
  }
});

const ContactStack = createStackNavigator({
    Contact:{
        screen: ContactScreen,
        navigationOptions:({navigation}) => ( {
            headerLeft: <DrawerButton  navigation={navigation}/>
        })
    }
} ,{
    defaultNavigationOptions:({navigation}) => ( {
        headerLeft: <DrawerButton  navigation={navigation}/>
    })
})

const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions:{
            drawerLabel :'Ana Sayfa',
            drawerIcon: ({tintColor}) => (
                <Icon
                name="android-home"
                size={22}
                color={tintColor}
                />
            )
        }
    },
    Contact: {
        screen: ContactStack,
        navigationOptions: {
            drawerLockMode: 'locked-closed',
            drawerLabel: 'Contact',
            drawerIcon: ({tintColor}) => (
                <Icon
                name="android-contact"
                size={22}
                color={tintColor}
                />
            )
        }
    }
}, {
    drawerPosition: 'left',
    drawerWidth:160,
    contentOptions:{
        activeTintColor: '#fff',
        inactiveTintColor: '#d03932',

        activeBackgroundColor:'#d03932',
        inactiveBackgroundColor:'#fff',

        itemStyle:{
            flexDirection:'row-reverse'
        }
    }
})

const ModelStack = createStackNavigator({
    Main: MainStack,
    Modal: AboutModal
}, {
    mode :'modal',
    headerModal:'none'
})

export default createAppContainer(Drawer);