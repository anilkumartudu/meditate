import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Badge, Button, Icon} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  margin: ${(props) => (props.m ? props.m : '0px')};
`;

const Horizontal = styled.View`
  justify-content: ${(props) => (props.jc ? props.jc : 'null')};
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-horizontal: 10px;
`;

const SetTimeAndSound = (props) => {
  return (
    <Container>
      <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
        <Text fw="900" fs="35px" m="0px 20px 10px">
          Timer
        </Text>
      </View>

      <View style={{flex: 0.6}}>
        <Text fw="normal" fs="14px" m=" 10px 20px 5px">
          Starting and ending bell
        </Text>

        <Horizontal>
          <Badge title="Basu" />
          <Badge title="Sakya" />
          <Badge title="Ombu" />
          <Badge title="Zhada" />
        </Horizontal>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 60,
          }}
          onPress={() => props.navigation.navigate('Timer')}>
          <Icon name="play" />
        </TouchableOpacity>

        <Horizontal>
          <Badge title="5min" />
          <Badge title="10min" />
          <Badge title="15min" />
          <Badge title="20min" />
          <Badge title="30min" />
          <Badge title="Select" />
        </Horizontal>
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

export default SetTimeAndSound;
