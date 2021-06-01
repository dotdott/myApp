import auth from '@react-native-firebase/auth';
import React from 'react';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {LoginWithFacebook, LoginWithText} from '../../screens/Login/styles';
import {Types as TypesPlataform} from '../../store/reducers/authReducer';
import {Types} from '../../store/reducers/authReducer';

const FacebookSignInButton = ({putAsyncStorageToken, navigation}: any) => {
  const dispatch = useDispatch();

  async function handleLoginWithFacebook() {
    await SignInFacebook();
  }

  async function SignInFacebook() {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      const token = await AccessToken.getCurrentAccessToken();

      if (token) {
        try {
          const provider = auth.FacebookAuthProvider.credential(
            token.accessToken,
          );

          putAsyncStorageToken(JSON.stringify(token.accessToken));

          const {additionalUserInfo}: any = await auth().signInWithCredential(
            provider,
          );

          dispatch({
            type: TypesPlataform.SET_PLATAFORM_LOGGEDED,
            plataform_loggeded: 'facebook',
          });

          dispatch({
            type: Types.CURRENT_USER,
            email: additionalUserInfo.profile.name,
            name: additionalUserInfo.profile.name,
            first_name: additionalUserInfo.profile.first_name,
            picture_url: additionalUserInfo.profile.picture.data.url,
          });

          return navigation.navigate('Homepage');
        } catch (err) {
          console.log(err);
        }
      }
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      return result;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginWithFacebook onPress={handleLoginWithFacebook}>
      <Icon name="facebook" solid color="#fff" size={26} />
      <LoginWithText>Facebook</LoginWithText>
    </LoginWithFacebook>
  );
};

export default FacebookSignInButton;
