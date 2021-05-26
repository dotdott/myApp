import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Container} from './styles';

export const User = () => {
  const user = useSelector((state: any) => state.authReducer);
  return (
    <Container>
      <Text>
        User Info // email: {user.email} senha: {user.password}
      </Text>
    </Container>
  );
};
