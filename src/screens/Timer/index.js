import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Sound from 'react-native-sound';
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
  let woosh;

  const audioList = [
    {
      title: 'Basu',
      url: require('../../assets/sound/bensound_india.mp3'),
    },
    {
      title: 'Sakya',
      url: require('../../assets/sound/bensound_littleplanet.mp3'),
    },
    {
      title: 'Ombu',
      url: require('../../assets/sound/bensound_november.mp3'),
    },
    {
      title: 'Zhada',
      url: require('../../assets/sound/bensound_relaxing.mp3'),
    },
  ];

  useEffect(() => {
    const {sound, time} = props.route.params;
    audioList.map((item) => {
      if (sound === item.title) {
        woosh = new Sound(item.url, (error, sound) => {
          if (error) {
            return;
          } else {
            woosh.play();
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      woosh.release();
    };
  }, []);

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
