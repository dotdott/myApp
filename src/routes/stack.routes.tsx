import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login} from '../screens/Login';
import {User} from '../screens/User';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    initialRouteName="User"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#f8f',
        borderTopColor: '#000',
      },
    }}>
    <stackRoutes.Screen name="Homepage" component={AuthRoutes} />
    <stackRoutes.Screen name="User" component={AuthRoutes} />
    <stackRoutes.Screen name="Login" component={Login} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
