import React from 'react';
import Styles from './welcomeStyles';
import { WelcomeProps } from './welcomeModal';

import { ProgressBarWelcome } from '../../components/ProgressBar';
import { Button } from '../../components/Button';
import WelcomeImage from '../../global/assets/welcome.png';

export function WelcomeLayout ({
  data: {MAX_PAGE_COUNT, contentMessages, indexPage, progress, handleNextPage}
}: WelcomeProps) {
  return (
    <Styles.Container>
      <Styles.Header>
        {MAX_PAGE_COUNT ? (
          <Styles.ButtonJump>
            <Styles.ButtonJumpText>Pular</Styles.ButtonJumpText>
          </Styles.ButtonJump>
        ) : (
          <Styles.Box />
        )}
      </Styles.Header>

      <Styles.ContentPicture>
        <Styles.ImageWelcome source={WelcomeImage}/>
      </Styles.ContentPicture>

      <Styles.ContentMain>
        <Styles.Title>{contentMessages[indexPage].title}</Styles.Title>
        <Styles.Message>{contentMessages[indexPage].message}</Styles.Message>

        <Styles.ContentProgressBar>
          <ProgressBarWelcome 
            progress={progress}
          />
        </Styles.ContentProgressBar>

        <Button
          onPress={handleNextPage}
          buttonText={MAX_PAGE_COUNT ? 'Continuar' : 'Começar'}
        />
      </Styles.ContentMain>

    </Styles.Container>
  );
}
