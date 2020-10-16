import React from 'react';
import styled from 'styled-components/native';
import Theme from '../../theme';

const Container = styled.TouchableOpacity`
  border: 1px solid
    ${(props) => (props.b ? Theme.colors.ACTIVE_BADGE : Theme.colors.BADGE)};
  border-radius: 5px;
  margin: 10px;
`;

const Text = styled.Text`
  color: ${(props) =>
    props.fc ? Theme.colors.ACTIVE_BADGE : Theme.colors.BADGE};
  margin-vertical: 5px;
  margin-horizontal: 10px;
`;

const Badge = (props) => {
  const {title, onPress, active} = props;

  return (
    <Container onPress={onPress} b={active}>
      <Text fc={active}>{title}</Text>
    </Container>
  );
};

export default Badge;
