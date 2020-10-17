import React, {useState, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import styled from 'styled-components/native';
import Theme from '../../theme';
import {Button} from '../../components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-weight: ${(props) => (props.fw ? props.fw : 'normal')};
  font-size: ${(props) => (props.fs ? props.fs : '14px')};
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
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('https://fakerestapi.azurewebsites.net/api/Users')
      .then((response) => response.text())
      .then((res) => setUserData([...JSON.parse(res)]));
  }, []);

  const onLogin = () => {
    if (username === '') {
      ToastAndroid.show('Please enter a username.', ToastAndroid.SHORT);
    } else if (password === '') {
      ToastAndroid.show('Please enter a password.', ToastAndroid.SHORT);
    } else {
      userData.map((item) => {
        if (username === item.UserName && password === item.Password) {
          props.navigation.navigate('SetTimeAndSound');
        } else {
          ToastAndroid.show(
            'Username or password invalid.',
            ToastAndroid.SHORT,
          );
        }
      });
    }
  };

  return (
    <Container>
      <Text fw="900" fs="20px">
        Welcome home
      </Text>
      <Text>Login to continue</Text>
      <TextInput
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
        placeholderTextColor={Theme.colors.TEXT_INPUT_PLACEHOLDER}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor={Theme.colors.TEXT_INPUT_PLACEHOLDER}
      />
      <Button title="Login" onPress={onLogin} />
    </Container>
  );
};

export default Login;
