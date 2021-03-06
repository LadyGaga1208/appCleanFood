import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as variables from '../config/variables';

import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import ForgotPass from '../screens/forgotPass';
import { screen } from './Screen';

import Home from '../screens/home';
import Catalogues from '../screens/catalogues';
import Carts from '../screens/cart';
import Profile from '../screens/profile';
import ProductDetail from '../screens/product';
import Search from '../screens/search';
import StoreDetail from '../screens/storeDetail';
import SplashScreen from '../screens/splash/SplashScreen';
import Address from '../screens/orders/Address';
import ConfirmOrder from '../screens/orders/ConfirmOrder';
import InforOrder from '../screens/orders/InforOrder';

function initStackNavigator(initialRouteName) {
  return createStackNavigator(
    { ...screen },
    {
      initialRouteName
    }
  );
}

const StackHome = createStackNavigator({
  Home,
  ProductDetail,
  Search,
  StoreDetail
});

const StackCart = createStackNavigator({
  Carts,
  ProductDetail,
  Address,
});

const AppTab = createBottomTabNavigator(
  {
    Home: StackHome,
    Stores: Catalogues,
    Carts: { screen: StackCart },
    Profile: { screen: Profile }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Stores') {
          iconName = 'bars';
        } else if (routeName === 'Carts') {
          iconName = 'shopping-cart';
        } else if (routeName === 'Profile') {
          iconName = 'user-circle';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: variables.mainColor,
      inactiveTintColor: 'gray'
    }
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
  SplashScreen,
  Auth: AuthStack,
  App: AppTab,
});

export default createAppContainer(AppNavigator);
