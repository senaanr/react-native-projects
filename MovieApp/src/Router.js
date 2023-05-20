import React from "react";

import {
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from '@react-navigation'

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Detail from "./screens/Detail";

import AuthLoading from "./screens/AuthLoading";

import { Icon } from 'native-base'

const AppStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Detail',
        }
    }
})

const AuthStack = createBottomTabNavigator(
    {
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                title: 'Sign In',
                tabBarIcon: ({ tintColor }) => <Icon name="log-in" style={{ color: tintColor }} />
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'Sign Up',
                tabBarIcon: ({ tintColor }) => <Icon name="person-add" style={{ color: tintColor }} />
            }
        }
    },
    {
        initialRouteName: 'SignUp',
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#586589',
            style: {
                backgroundColor: '171f33'
            }
        }
    }
)

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: {
            screen: AuthLoading
        },
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(SwitchNavigator);