import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Animated, Image} from 'react-native';
import {Container} from './styles';

export const Splash = ({navigation}: any) => {
  const [rotateAnimation] = useState(new Animated.Value(0));

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@myApp_key');

      return jsonValue != null
        ? navigation.navigate('Homepage')
        : navigation.push('Login');
    } catch (e) {
      console.warn(e);
    }
  };

  const interpolateRotation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  const animatedStyle = {
    width: 400,
    height: 350,
    transform: [
      {
        rotate: interpolateRotation,
      },
    ],
  };

  const animation = Animated.loop(
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }),
  ).start(() => {
    rotateAnimation.setValue(0);
  });

  useEffect(() => {
    animation;
    getData();
  }, []);

  return (
    <Container>
      <Animated.Image
        style={animatedStyle}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/08/22/11/00/emoticon-1611718_960_720.png',
        }}
      />
    </Container>
  );
};
