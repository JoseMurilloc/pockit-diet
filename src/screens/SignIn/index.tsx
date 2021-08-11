import React from 'react';
import {  Image, StatusBar, View } from 'react-native';

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

export const SignIn: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD"/>
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
              <Input 
                placeholder="E-mail" 
                type="sms"
              />
            </View>

            <View style={{marginTop: 16}}>
              <LabelInput>Senha</LabelInput>
              <Input 
                placeholder="Senha" 
                secureTextEntry={true}
                type="lock"
              />
            </View>

            <ForgotPassword>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>

            <ContainerButton>
              <Button buttonText="Entrar" />
            </ContainerButton>
          </Form>
        </Main>
        <PlantImageBottom>
          <Image source={PlantDown} />
        </PlantImageBottom>
      </Container>
    </>
  );
}
