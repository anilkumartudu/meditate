import React from 'react';
import styled from 'styled-components/native';
import Theme from '../../theme';

const Btn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.THEME};
  height: 55px;
  width: 90%;
  border-radius: 5px;
  margin: 10px;
`;

const BtnText = styled.Text`
  color: ${Theme.colors.BTN_TEXT};
`;

const Button = (props) => {
  const {title, onPress} = props;

  return (
    <Btn onPress={onPress}>
      <BtnText>{title}</BtnText>
    </Btn>
  );
};

export default Button;
