import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Login} from '../screens/Login';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    initialRouteName="Login"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#fff',
      },
    }}>
    <stackRoutes.Screen name="Homepage" component={AuthRoutes} />
    <stackRoutes.Screen name="Login" component={Login} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
