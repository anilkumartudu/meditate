import React, {useState} from 'react';
import {View, TouchableOpacity, ToastAndroid} from 'react-native';
import styled from 'styled-components/native';
import {Badge, Button, Icon} from '../../components';

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  font-weight: ${(props) => (props.fw ? props.fw : 'normal')};
  font-size: ${(props) => (props.fs ? props.fs : '14px')};
  margin: ${(props) => (props.m ? props.m : '0px')};
`;

const Horizontal = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-horizontal: 10px;
`;

const SetTimeAndSound = (props) => {
  const [sound, setSound] = useState('');
  const [isBasu, setIsBasu] = useState(false);
  const [isSakya, setIsSakya] = useState(false);
  const [isOmbu, setIsOmbu] = useState(false);
  const [isZhada, setIsZhada] = useState(false);

  const [time, setTime] = useState('');
  const [is5min, setIs5min] = useState(false);
  const [is10min, setIs10min] = useState(false);
  const [is15min, setIs15min] = useState(false);
  const [is20min, setIs20min] = useState(false);
  const [is30min, setIs30min] = useState(false);

  return (
    <Container>
      <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
        <Text fw="900" fs="35px" m="0px 20px 10px">
          Timer
        </Text>
      </View>

      <View style={{flex: 0.6}}>
        <Text m=" 10px 20px 5px">Starting and ending bell</Text>

        <Horizontal>
          <Badge
            title="Basu"
            onPress={() => {
              setSound('Basu');
              setIsBasu(true);
              setIsSakya(false);
              setIsOmbu(false);
              setIsZhada(false);
            }}
            active={isBasu}
          />
          <Badge
            title="Sakya"
            onPress={() => {
              setSound('Sakya');
              setIsBasu(false);
              setIsSakya(true);
              setIsOmbu(false);
              setIsZhada(false);
            }}
            active={isSakya}
          />
          <Badge
            title="Ombu"
            onPress={() => {
              setSound('Ombu');
              setIsBasu(false);
              setIsSakya(false);
              setIsOmbu(true);
              setIsZhada(false);
            }}
            active={isOmbu}
          />
          <Badge
            title="Zhada"
            onPress={() => {
              setSound('Zhada');
              setIsBasu(false);
              setIsSakya(false);
              setIsOmbu(false);
              setIsZhada(true);
            }}
            active={isZhada}
          />
        </Horizontal>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 60,
          }}
          onPress={() => {
            if (sound == '') {
              ToastAndroid.show('Please select an audio', ToastAndroid.SHORT);
            } else if (time == '') {
              ToastAndroid.show('Please select a duration', ToastAndroid.SHORT);
            } else {
              props.navigation.navigate('Timer', {sound, time});
            }
          }}>
          <Icon name="play" />
        </TouchableOpacity>

        <Horizontal>
          <Badge
            title="5min"
            onPress={() => {
              setTime('5min');
              setIs5min(true);
              setIs10min(false);
              setIs15min(false);
              setIs20min(false);
              setIs30min(false);
            }}
            active={is5min}
          />
          <Badge
            title="10min"
            onPress={() => {
              setTime('10min');
              setIs5min(false);
              setIs10min(true);
              setIs15min(false);
              setIs20min(false);
              setIs30min(false);
            }}
            active={is10min}
          />
          <Badge
            title="15min"
            onPress={() => {
              setTime('15min');
              setIs5min(false);
              setIs10min(false);
              setIs15min(true);
              setIs20min(false);
              setIs30min(false);
            }}
            active={is15min}
          />
          <Badge
            title="20min"
            onPress={() => {
              setTime('20min');
              setIs5min(false);
              setIs10min(false);
              setIs15min(false);
              setIs20min(true);
              setIs30min(false);
            }}
            active={is20min}
          />
          <Badge
            title="30min"
            onPress={() => {
              setTime('30min');
              setIs5min(false);
              setIs10min(false);
              setIs15min(false);
              setIs20min(false);
              setIs30min(true);
            }}
            active={is30min}
          />
          {/* <Badge title="Select" /> */}
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
