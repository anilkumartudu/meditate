import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AdjustVolumeScreen,
  EndGoalScreen,
  LoginScreen,
  SetTimeAndSoundScreen,
  TimerScreen,
} from '../screens';

const Stack = createStackNavigator();

const MainContainer = () => {
  return (
    <Stack.Navigator initialRouteName="SetTimeAndSound" headerMode="none">
      <Stack.Screen name="AdjustVolume" component={AdjustVolumeScreen} />
      <Stack.Screen name="EndGoal" component={EndGoalScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SetTimeAndSound" component={SetTimeAndSoundScreen} />
      <Stack.Screen name="Timer" component={TimerScreen} />
    </Stack.Navigator>
  );
};

export default MainContainer;
