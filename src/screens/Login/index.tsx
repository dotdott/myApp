import React, {useEffect, useState} from 'react';
import {Alert, Animated, ImageBackground} from 'react-native';
import {
  Container,
  EmailInput,
  LoginButton,
  LoginText,
  PasswordInput,
  RegisterSpan,
  RegisterText,
} from './styles';


interface loginFieldsProps {
  email?: string;
  password?: string;
}

const wallpaper = {
  uri: 'https://www.fashionwallpaper.co.uk/media/catalog/product/cache/1/image/475x/040ec09b1e35df139433887a97daa66f/_/_/__auto_tile_24310__137144full.png',
};

export const Login = ({navigation}: any) => {
  const [loginFields, setLoginFields] = useState<loginFieldsProps>({});
  const [bouncingLogin] = useState(new Animated.ValueXY({x: 0, y: 150}));

  useEffect(() => {
    Animated.spring(bouncingLogin.y, {
      toValue: 0,
      speed: 5,
      bounciness: 25,
      useNativeDriver: true,
    }).start();
  }, []);

  function handleSignUpRedirect() {
    return Alert.alert('Cadastrei!');
  }

  function handleLogin() {
    return navigation.navigate('Homepage');
  }
  return (
    <Animated.View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{translateY: bouncingLogin.y}],
      }}>
      <ImageBackground
        source={wallpaper}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <EmailInput
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={e => setLoginFields({email: e})}
        />
        <PasswordInput
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry
          onChangeText={e => setLoginFields({password: e})}
        />

        <LoginButton onPress={() => navigation.navigate('Homepage')}>
          <LoginText>Login</LoginText>
        </LoginButton>

        <RegisterText>Não tem uma conta?</RegisterText>
        <RegisterSpan onPress={handleSignUpRedirect}>
          Cadastre-se agora!
        </RegisterSpan>
      </ImageBackground>
    </Animated.View>
  );
};
