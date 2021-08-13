import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../../Input';

import {ErrorMessage} from './styles'

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
  type: 'sms' | 'lock';
}

export function InputForm ({
  control, name, type, error, ...rest
}: Props) {
  return (
    <Controller 
      control={control}
      render={({field: { onChange, value}}) => (
        <>
          <Input
            onChangeText={onChange}
            value={value}
            error={error}
            type={type}
            {...rest}
          />
          { error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}  
      name={name}
    />
  );
}

export default InputForm;