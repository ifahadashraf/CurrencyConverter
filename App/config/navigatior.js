import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import { Currencies } from '../screens/currencies';
import { Home } from '../screens/home';
import { Login } from '../screens/login';
import { Options } from '../screens/options';

const MainStack = createStackNavigator();

export const Navigator = () => (
  <MainStack.Navigator initialRouteName='Login'>
    <MainStack.Screen
      name='Login'
      component={ Login }
      options={ {headerShown: false} }
    />
    <MainStack.Screen
      name='Home'
      component={ Home }
      options={ {headerShown: false} }
    />
    <MainStack.Screen
      name='Options'
      component={ Options }
    />
    <MainStack.Screen
      name='Currencies'
      component={ Currencies }
      options={ ({route}) => ({
        title: route.params && route.params.title,
      }) }
    />
  </MainStack.Navigator>
);
