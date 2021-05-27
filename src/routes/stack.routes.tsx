import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login} from '../screens/Login';
import {Splash} from '../screens/Splash';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator headerMode="none" initialRouteName="Splash">
    <stackRoutes.Screen name="Homepage" component={AuthRoutes} />
    <stackRoutes.Screen name="User" component={AuthRoutes} />
    <stackRoutes.Screen name="Login" component={Login} />
    <stackRoutes.Screen name="Splash" component={Splash} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
