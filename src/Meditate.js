import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainContainer from './navigation/mainContainer';
import Theme from './theme';

const Meditate = () => {
  return (
    <Fragment>
      <StatusBar
        backgroundColor={Theme.colors.THEME}
        barStyle="light-content"
      />
      <NavigationContainer>
        <MainContainer />
      </NavigationContainer>
    </Fragment>
  );
};

export default Meditate;
