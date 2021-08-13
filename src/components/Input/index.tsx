import React, { useCallback, useState } from 'react';
import { Image, TextInputProps } from 'react-native';
import { Container, Input as TextInput } from './styles';

import smsIcon from '../../global/assets/icons/sms.png';
import smsIconError from '../../global/assets/icons/sms_error.png';

import lockIcon from '../../global/assets/icons/lock.png';
import lockIconError from '../../global/assets/icons/lock_error.png';

const icons = {
  sms: {smsIcon, smsIconError},
  lock: {lockIcon, lockIconError},
}

interface Props extends TextInputProps {
  type?: 'sms' | 'lock',
  error: string
}

export function Input({ type, error = '', ...rest}: Props) {
  return (
    <>
      <Container isError={!!error}>
        {
          type === 'sms' &&
          <Image source={
            error ? 
              icons[type].smsIconError
              : icons[type].smsIcon
          } />
        }
        {
          type === 'lock' &&
          <Image source={
            error ? 
              icons[type].lockIconError
              : icons[type].lockIcon
          } />
        }
        <TextInput {...rest} />
      </Container>
    </>
  );
}
