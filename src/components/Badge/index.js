import React from 'react';
import styled from 'styled-components/native';
import Theme from '../../theme';

const Container = styled.TouchableOpacity`
  border: 1px solid ${Theme.colors.BADGE};
  border-radius: 5px;
  margin: 10px;
`;

const Text = styled.Text`
  margin-vertical: 5px;
  margin-horizontal: 10px;
`;

const Badge = (props) => {
  const {title, onPress} = props;

  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
};

export default Badge;
