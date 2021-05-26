import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Platform, StyleSheet} from 'react-native';
import {Login} from '../screens/Login';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {User} from '../screens/User';
import {myVar} from '../styleVariables';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: myVar.orange,
      inactiveTintColor: myVar.light_orange,
      // labelPosition: 'beside-icon',
      style: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 70,
        zIndex: 999,
        borderTopWidth: 1,
        borderTopColor: myVar.orange,
      },
    }}
    initialRouteName="Homepage">
    <AppTab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({size, color}) => (
          <Icon
            name="bookmark"
            // solid
            color={color}
            size={size}
            style={styles.icon}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="Homepage"
      component={Home}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({size, color}) => (
          <Icon
            name="home"
            solid
            color={color}
            size={36}
            style={styles.iconMiddle}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="User"
      component={User}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({size, color}) => (
          <Icon
            name="user"
            solid
            color={color}
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
    padding: 5,
    marginTop: 15,
  },
  iconMiddle: {
    borderRadius: 99,
    padding: 20,
    marginTop: -35,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderBottomWidth: 0,
    // borderRightWidth: 0,
    borderColor: myVar.orange,
  },
});

export default AuthRoutes;
