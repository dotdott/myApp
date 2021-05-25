import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Platform, StyleSheet} from 'react-native';
import {Login} from '../screens/Login';

import Icon from 'react-native-vector-icons/FontAwesome5';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      // labelPosition: 'beside-icon',
      style: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 80,
        zIndex: 999,
      },
    }}>
    <AppTab.Screen
      name="Homepage"
      component={Home}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({size, color}) => (
          <Icon
            name="home"
            solid
            color="#f38"
            size={size}
            style={styles.icon}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({size, color}) => (
          <Icon
            name="facebook"
            solid
            color="#f38"
            size={size}
            style={styles.icon}
          />
        ),
      }}
    />
  </AppTab.Navigator>
);

const styles = StyleSheet.create({
  icon: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    marginTop: 15,
  },
});

export default AuthRoutes;
