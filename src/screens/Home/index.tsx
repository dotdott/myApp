import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container} from './styles';

import auth from '@react-native-firebase/auth';

export const Home = ({navigation}: any) => {
  const logout = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@myApp_key');
      console.log('jsonzado' + jsonValue);
      return jsonValue != null ? removeItemValue('@myApp_key') : null;
    } catch (e) {
      console.warn(e);
    }
  };

  async function removeItemValue(key: string) {
    try {
      await AsyncStorage.removeItem(key);
      auth().signOut();
      return navigation.push('Splash');
    } catch (exception) {
      return false;
    }
  }

  return (
    <Container>
      <TouchableOpacity onPress={logout}>
        <Text>Homepage clicar para logout</Text>
      </TouchableOpacity>
    </Container>
  );
};
