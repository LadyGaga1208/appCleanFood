import React from 'react';
import {
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as variables from '../config/variables';

import Home from '../screens/home';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import ForgotPass from '../screens/forgotPass';
import Carts from '../screens/cart';
import Profile from '../screens/profile';
import Catalogues from '../screens/catalogues';

const AppTab = createBottomTabNavigator(
    {
        Home,
        Catalogues,
        Carts,
        Profile
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'home';
                } else if (routeName === 'Catalogues') {
                    iconName = 'bars';
                } else if (routeName === 'Carts') {
                    iconName = 'shopping-cart';
                } else if (routeName === 'Profile') {
                    iconName = 'user-circle';
                }
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: variables.mainColor,
            inactiveTintColor: 'gray',
        },
    }
);

const AuthStack = createStackNavigator(
    {
        SignIn,
        SignUp,
        ForgotPass
    },
    {
        headerMode: 'none'
    }
);

const AppNavigator = createSwitchNavigator({
    App: AppTab,
    Auth: AuthStack,

});

export default createAppContainer(AppNavigator);
