import styled from 'styled-components/native';
import {myVar} from '../../styleVariables';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  font-family: 'sans-serif';
`;

export const EmailInput = styled.TextInput`
  border-color: ${myVar.orange};
  border-bottom-width: 2px;
  padding: 7px 15px;
  font-size: ${myVar.text_size};
  width: 90%;
  margin-bottom: 10px;
`;

export const PasswordInput = styled(EmailInput)`
  margin-bottom: 0px;
`;

export const InputText = styled.Text`
  width: 88%;
  font-size: 20;
  color: ${myVar.orange};
  font-weight: bold;
`;

export const LoginButton = styled.TouchableOpacity`
  background: ${myVar.orange};
  width: 50%;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  padding: 7px 15px;
  border-radius: 10px;
`;
export const LoginText = styled.Text`
  color: #fff;
  font-size: ${myVar.text_size};
  font-weight: bold;
`;

export const RegisterText = styled.Text`
  margin-top: 5px;
  font-size: ${myVar.text_size};
`;
export const RegisterSpan = styled.Text`
  text-decoration: underline;
  color: ${myVar.orange};
  font-weight: bold;
  font-size: 15px;
`;

export const LoginWithOthers = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

export const LoginWithFacebook = styled.TouchableOpacity`
  background: #2851a3;
  flex: 1;
  margin-left: 20px;
  border-radius: 10px;
  padding: 3px 10px;
  flex-direction: row;
  align-items: center;
`;
export const LoginWithGoogle = styled(LoginWithFacebook)`
  background: #cf4333;
  margin-left: 10px;
  margin-right: 20px;
  padding-bottom: 5px;
`;

export const LoginWithText = styled.Text`
  color: #fff;
  font-size: ${myVar.text_size};
  font-weight: bold;
  flex: 1;
  text-align: center;
`;
