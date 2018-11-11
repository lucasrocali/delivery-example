import React from 'react';
import { StyleSheet, Platform, Image, Icon, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, TabBarBottom, NavigationActions, DrawerNavigator } from 'react-navigation';
import Ionicon from "react-native-vector-icons/Ionicons";

import colors from '../constants/colors';

import BaseScreen from '../screens/BaseScreen';
import LoginScreen from '../screens/LoginScreen';
import PerfilScreen from '../screens/PerfilScreen';

import StoresScreen from '../screens/StoresScreen';
import StoreDetailScreen from '../screens/StoreDetailScreen'

export const screenNames = {
    Login: 'Login',
    Perfil: 'Perfil',
    Stores: 'Stores',
    StoreDetail: 'StoreDetail',

    //Stacks
    StoresStack: 'StoresStack'
}

const StoresStack = StackNavigator({
    [screenNames.Stores]: {
        screen: StoresScreen
    },
    [screenNames.StoreDetail]: {
        screen: StoreDetailScreen
    }
})

export const AppNavigator = StackNavigator(
    {
        // [screenNames.Login]: {
        //     screen: LoginScreen,
        // },
        // [screenNames.Perfil]: {
        //     screen: PerfilScreen,
        // },
        [screenNames.StoresStack]: {
            screen: StoresStack
        }
    }, {
        initialRouteName: screenNames.StoresStack,
        mode: 'modal',
        headerMode: 'none'
    }
);