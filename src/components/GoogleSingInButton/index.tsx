import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {LoginWithGoogle, LoginWithText} from '../../screens/Login/styles';
import {Types} from '../../store/reducers/authReducer';
import {Types as TypesPlataform} from '../../store/reducers/authReducer';

const GoogleSignInButton = ({putAsyncStorageToken, navigation}: any) => {
  const dispatch = useDispatch();

  async function onGoogleButtonPress() {
    try {
      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);
      await putAsyncStorageToken(googleCredential.token);

      dispatch({
        type: TypesPlataform.SET_PLATAFORM_LOGGEDED,
        plataform_loggeded: 'google',
      });

      return navigation.navigate('Homepage');
    } catch (err) {
      console.log('error: ' + err);
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '618338588915-h94a19gqgahl4ebsi07bm1ii1mgok433.apps.googleusercontent.com',
    });
  }, []);

  return (
    <LoginWithGoogle onPress={onGoogleButtonPress}>
      <Icon name="google" solid color="#fff" size={26} />
      <LoginWithText>Google</LoginWithText>
    </LoginWithGoogle>
  );
};

export default GoogleSignInButton;
