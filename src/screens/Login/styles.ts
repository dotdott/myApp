import styled from 'styled-components/native';
import {myVar} from '../../styleVariables';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  font-family: 'sans-serif';
`;

export const EmailInput = styled.TextInput`
  border: 1px solid ${myVar.orange};
  border-radius: 10px;
  padding: 7px 15px;
  font-size: ${myVar.text_size};
  width: 90%;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
`;

export const PasswordInput = styled.TextInput`
  border: 1px solid ${myVar.orange};
  border-radius: 10px;
  padding: 7px 15px;
  background: rgba(255, 255, 255, 0.5);
  font-size: ${myVar.text_size};
  width: 90%;
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
