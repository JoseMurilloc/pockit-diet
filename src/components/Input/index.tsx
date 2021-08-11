import React, { useCallback, useState } from 'react';
import { Image, TextInputProps } from 'react-native';
import { Container, Input as TextInput } from './styles';

import smsIcon from '../../global/assets/icons/sms.png';
import lockIcon from '../../global/assets/icons/lock.png';

const icons = {
  sms: smsIcon,
  lock: lockIcon,
}

interface Props extends TextInputProps {
  type?: 'sms' | 'lock'
}

export function Input({ type, ...rest}: Props) {
  return (
    <Container>
      {
        type &&
        <Image source={icons[type]} />
      }
      <TextInput {...rest} />
    </Container>
  );
}
