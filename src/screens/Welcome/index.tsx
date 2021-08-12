import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { 
  Container,
  Header,
  ButtonJump,
  ButtonJumpText,
  ContentPicture,
  ImageWelcome,
  ContentMain,
  Title,
  Message,
  ContentProgressBar
} from './styles';

import WelcomeImage from '../../global/assets/welcome.png';
import { Button } from '../../components/Button';
import {ProgressBarWelcome} from '../../components/ProgressBar';

const Welcome: React.FC = () => {

  const [indexPage, setIndexPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const contentMessages = [
    {
      title: 'Plano alimentar', 
      message: 'Sua dieta em qualquer lugar a qualquer hora do dia.'
    },
    {
      title: 'Receitas incríveis', 
      message: 'Tenha acesso a receitas saudáveis que vão abranger seu paladar.'
    },
    {
      title: 'Saúde e autoestima', 
      message: 'Viva uma vida mais saudavel e conquiste o corpo que você sempre sonhou.'
    }
  ];
  const MAX_PAGE_COUNT = indexPage < 2;


  useEffect(() => {
    if (indexPage <= 2) {
      setProgress(state => state + 0.36)
    }
  }, [indexPage])

  function handleNextPage() {
    if (MAX_PAGE_COUNT) {
      setIndexPage(state => state + 1);
    } else {
      // TODO
    }
  }


  return (
    <Container>
      <Header>
        {MAX_PAGE_COUNT ? (
          <ButtonJump>
            <ButtonJumpText>Pular</ButtonJumpText>
          </ButtonJump>
        ) : (
          <View style={{width: 73, height: 51, marginTop: 40}} />
        )}
      </Header>

      <ContentPicture>
        <ImageWelcome source={WelcomeImage}/>
      </ContentPicture>

      <ContentMain>
        <Title>{contentMessages[indexPage].title}</Title>
        <Message>{contentMessages[indexPage].message}</Message>

        <ContentProgressBar>
          <ProgressBarWelcome 
            progress={progress}
          />
        </ContentProgressBar>

        <Button
          onPress={handleNextPage}
          buttonText="Continuar"
        />
      </ContentMain>

    </Container>
  );
}

export default Welcome;