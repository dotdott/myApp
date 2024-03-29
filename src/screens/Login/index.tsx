import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {Alert, Animated, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GoogleSignInButton from '../../components/GoogleSingInButton';
import FacebookSignInButton from '../../components/FacebookSignInButton';
import {Types as TypesPlataform} from '../../store/reducers/authReducer';
import {Types} from '../../store/reducers/authReducer';

import {
  EmailInput,
  InputText,
  LoginButton,
  LoginText,
  LoginWithFacebook,
  LoginWithGoogle,
  LoginWithOthers,
  LoginWithText,
  PasswordInput,
  RegisterSpan,
  RegisterText,
} from './styles';

const wallpaper = {
  uri: 'https://www.fashionwallpaper.co.uk/media/catalog/product/cache/1/image/475x/040ec09b1e35df139433887a97daa66f/_/_/__auto_tile_24310__137144full.png',
};

export const Login = ({navigation}: any) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [bouncingLogin] = useState(new Animated.ValueXY({x: 0, y: 150}));
  const [currentUser, setCurrentUser] =
    useState<FirebaseAuthTypes.User | null>(null);
  const dispatch = useDispatch();
  const user = useSelector<any>(state => state.authReducer);

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

  async function handleLogin() {
    if (loginEmail !== '' && loginPassword !== '') {
      try {
        await SignIn(loginEmail, loginPassword);
        dispatch({
          type: Types.CURRENT_USER,
          email: loginEmail,
        });

        dispatch({
          type: TypesPlataform.SET_PLATAFORM_LOGGEDED,
          plataform_loggeded: 'main',
        });

        return navigation.navigate('Homepage');
      } catch (err) {
        console.log(err);
      }
    }
  }

  function SignIn(email: string, password: string) {
    return auth().signInWithEmailAndPassword(email, password);
  }

  const putAsyncStorageToken = async (key: string) => {
    try {
      await AsyncStorage.setItem('@myApp_key', JSON.stringify(key));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      const newdata = user;

      if (newdata) {
        await putAsyncStorageToken(newdata.uid);
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, [SignIn]);

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
        <InputText>Email</InputText>
        <EmailInput
          placeholder="Digite seu E-mail"
          autoCorrect={false}
          onChangeText={(e: string) => setLoginEmail(e)}
        />

        <InputText>Senha</InputText>
        <PasswordInput
          placeholder="Digite sua Senha"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(e: string) => setLoginPassword(e)}
        />

        <LoginButton onPress={handleLogin}>
          <LoginText>Login</LoginText>
        </LoginButton>

        <LoginWithOthers>
          {/* <LoginWithFacebook onPress={handleLoginWithFacebook}>
            <Icon name="facebook" solid color="#fff" size={26} />
            <LoginWithText>Facebook</LoginWithText>
          </LoginWithFacebook> */}
          <FacebookSignInButton
            putAsyncStorageToken={putAsyncStorageToken}
            navigation={navigation}
          />

          {/* <LoginWithGoogle>
            <Icon name="google" solid color="#fff" size={26} />
            <LoginWithText>Google</LoginWithText>
          </LoginWithGoogle> */}
          <GoogleSignInButton
            putAsyncStorageToken={putAsyncStorageToken}
            navigation={navigation}
          />
        </LoginWithOthers>

        <RegisterText>Não tem uma conta?</RegisterText>
        <RegisterSpan onPress={handleSignUpRedirect}>
          Cadastre-se agora!
        </RegisterSpan>
      </ImageBackground>
    </Animated.View>
  );
};
