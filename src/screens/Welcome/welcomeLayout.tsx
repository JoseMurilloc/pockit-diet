import React from 'react';
import Styles from './welcomeStyles';
import { WelcomeProps } from './welcomeModal';

import { ProgressBarWelcome } from '../../components/ProgressBar';
import { Button } from '../../components/Button';
import welcomeImage from '../../global/assets/welcome.png';
import welcomeRevenuesImage from '../../global/assets/welcomeRevenues.png';
import welcomeWorkoutImage from '../../global/assets/welcomeWorkout.png';

import theme from '../../global/styles/theme'

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
        {indexPage === 0  && (
          <Styles.ImageWelcome source={welcomeImage}/>  
        )}
        {indexPage === 1  && (
          <Styles.ImageWelcome source={welcomeRevenuesImage}/>  
        )}
        {indexPage === 2  && (
          <Styles.ImageWelcome source={welcomeWorkoutImage}/>  
        )}
      </Styles.ContentPicture>

      <Styles.ContentMain>
        <Styles.Title>
          {contentMessages[indexPage].title}
        </Styles.Title>
        <Styles.Message>
          {contentMessages[indexPage].message}
        </Styles.Message>

        <Styles.ContentProgressBar>
          <ProgressBarWelcome 
            progress={progress}
            styles={{
              height: 11,
              color: theme.colors.success_text,
              borderRadius: 8,
              width: 325
            }}
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
