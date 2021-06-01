import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container} from './styles';

import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';

interface currentUserStateData {
  authReducer: {
    email: string;
    password: string;
    name: string;
    first_name: string;
    picture_url: string;
    plataform_loggeded: string;
  };
}

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

  const currentUser = useSelector(
    (state: currentUserStateData) => state.authReducer,
  );

  useEffect(() => {
    console.log(currentUser.first_name);
    console.log(currentUser.plataform_loggeded);
  }, [currentUser]);

  return (
    <Container>
      <TouchableOpacity onPress={logout}>
        <Text>Homepage clicar para logout</Text>
        <Text>{currentUser.first_name}</Text>
        <Text>{currentUser.email}</Text>
        <Image
          source={{
            uri: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3461497597322846&height=100&width=100&ext=1625000225&hash=AeQRHztmhaNSD9OseLg',
          }}
          style={{width: 100, height: 100}}
        />
      </TouchableOpacity>
    </Container>
  );
};
