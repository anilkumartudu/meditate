import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Button, Icon} from '../../components';

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  margin: ${(props) => (props.m ? props.m : '0px')};
`;

const Timer = (props) => {
  return (
    <Container>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SetTimeAndSound')}>
          <Icon name="close" />
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}
          onPress={() => props.navigation.navigate('Timer')}>
          <Icon name="pause" />
        </TouchableOpacity>

        <Text fw="normal" fs="14px" m=" 10px 20px 5px">
          0:59
        </Text>
      </View>

      <View
        style={{
          flex: 0.2,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Button
          title="Adjust Volume"
          // onPress={() => props.navigation.navigate('')}
        />
      </View>
    </Container>
  );
};

export default Timer;
