import React from 'react';
import {  Image, TouchableWithoutFeedback, Keyboard, View, Text } from 'react-native';

import logoPocketDiet from '../../global/assets/logoPocketDiet.png';
import PlantUp from '../../global/assets/PlantUp.png';
import PlantDown from '../../global/assets/PlantDown.png';

import {Input} from '../../components/Input';

import {
  Container,
  Form,
  Title,
  Description,
  ForgotPassword,
  ForgotPasswordText,
  PlantImageBottom,
  PlantImageTop,
  Header,
  Main,
  LabelInput,
  ContainerButton
} from './styles';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import InputForm from '../../components/Form/InputForm';


type FormData = {
  email: string;
  password: string;
}

const schemaSignIn = Yup.object().shape({
  email: Yup
    .string()
    .required('Campo é obrigatório')
    .email('Formato de email inválido'),
  password: Yup
    .string()
    .required('Campo é obrigatório')
    .min(6, 'Requer pelo menos 6 caracteres')
})

export const SignIn: React.FC = () => {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaSignIn)
  })

  async function handleSignIn(data: FormData) {
    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <PlantImageTop source={PlantUp} />
        <Header>
          <Image source={logoPocketDiet}/>
        </Header>
        <Main>
          <Form>
            <Title>
              Entre com sua conta
            </Title>
            <Description>
              Realize seu acesso com os dados informados pelo profissional.
            </Description>

            <View>
              <LabelInput>Email</LabelInput>
              <InputForm
                control={control}
                name="email"
                placeholder="E-mail" 
                type="sms"
                autoCorrect={false}
                keyboardType="email-address"
                error={errors.email && errors.email.message}
              />
            </View>

            <View style={{marginTop: 16}}>
              <LabelInput>Senha</LabelInput>
              <InputForm
                control={control} 
                name="password"
                placeholder="Senha" 
                secureTextEntry={true}
                type="lock"
                error={errors.password && errors.password.message}
              />
            </View>

            <ForgotPassword>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>

            <ContainerButton>
              <Button 
                buttonText="Entrar" 
                onPress={handleSubmit(handleSignIn)}
              />
            </ContainerButton>
          </Form>
        </Main>
        <PlantImageBottom>
          <Image source={PlantDown} />
        </PlantImageBottom>
      </Container>
    </TouchableWithoutFeedback>
  );
}
