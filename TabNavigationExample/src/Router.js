import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { 
    createBottomTabNavigator, 
    createMaterialTopTabNavigator,
    createAppContainer, 
    createDrawerNavigator,
    createStackNavigator } from 'react-navigation'

import Home from './screens/Home'
import Contacts from './screens/Contacts'
import Settings from './screens/Settings'
import ContactDetail from './screens/ContactDetail'
import SettingsModal from './components/SettingsModal'
import DrawerMenu from './components/DrawerMenu'

import Icon from 'react-native-vector-icons/Ionicons'

const ContactStack = createStackNavigator({
    Contacts:{
        screen:Contacts
    },
    ContactDetail:{
        screen:ContactDetail,
        navigationOptions: {
            title:'Contact Detail'
        }
    }
})

const TabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: Home,
        navigationOptions :{
            tabBarIcon: ({tintColor}) => (<Icon name="android-home" size={23} color={tintColor}/>)
        }
    },
    Contacts: {
        screen: ContactStack,
        navigationOptions :{
            tabBarIcon: ({tintColor}) => (<Icon name="android-contacts" size={23} color={tintColor}/>)
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions :{
            tabBarIcon: ({tintColor}) => (<Icon name="android-settings" size={23} color={tintColor}/>)
        }
    }
}, {
    tabBarOptions: {
        showLabel:false,
        activeTintColor:'#f8f8f8',
        inactiveTintColor:'#586589',
        style:{
            backgroundColor:'#171f33'
        }
    },
    initialRouteName : 'Contacts'
})

const ModalStack = createStackNavigator({
    Tabs:{
        screen:TabNavigator
    },
    SettingsModal:{
        screen:SettingsModal
    }
}, {
    mode: 'modal',
    headerMode : 'none'
})

const DrawerNavigator = createDrawerNavigator({
    ModalStack: {
        screen:ModalStack
    }
}, {
    contentComponent:  DrawerMenu
})

export default createAppContainer(DrawerNavigator);