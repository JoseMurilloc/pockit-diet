import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';


interface Props extends TouchableOpacityProps {
  buttonText: string;
}

export function Button ({buttonText, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Title>{buttonText}</Title>
    </Container>
  );
}