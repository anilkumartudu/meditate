import React from 'react';
import styled from 'styled-components/native';
import Theme from '../../theme';
import {Button} from '../../components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  margin: 10px;
`;

const TextInput = styled.TextInput`
  width: 90%;
  border: 1px solid ${Theme.colors.TEXT_INPUT_BORDER};
  padding-horizontal: 20px;
  border-radius: 5px;
  margin: 5px;
`;

const Login = (props) => {
  return (
    <Container>
      <Text fw="900" fs="20px">
        Welcome home
      </Text>
      <Text fw="normal" fs="14px">
        Login to continue
      </Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor={Theme.colors.TEXT_INPUT}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={Theme.colors.TEXT_INPUT}
      />
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('SetTimeAndSound')}
      />
    </Container>
  );
};

export default Login;
