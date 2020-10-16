import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Button, Icon} from '../../components';
import Theme from '../../theme';

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  font-weight: ${(props) => (props.fw ? props.fw : 'normal')};
  font-size: ${(props) => props.fs};
  color: ${(props) =>
    props.fc ? props.fc : Theme.colors.END_GOAL_BANNER_FONT};
  margin: ${(props) => (props.m ? props.m : '0px')};
`;

const Timer = (props) => {
  return (
    <Container>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Theme.colors.THEME,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <Text fs="20px">Great, job!</Text>
        <Text fs="50px">5</Text>
        <Text fs="14px">minutes meditated</Text>
      </View>

      <View style={{flex: 0.3, justifyContent: 'flex-end'}}>
        <Text fw="normal" fs="20px" fc={Theme.colors.FONT_COLOR} m="35px">
          "Surrender to what is. Let go of what was. Have faith in what will
          be." - Sonia Riccotti
        </Text>
      </View>

      <View
        style={{
          flex: 0.2,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Button
          title="Next"
          onPress={() => props.navigation.navigate('SetTimeAndSound')}
        />
      </View>
    </Container>
  );
};

export default Timer;
