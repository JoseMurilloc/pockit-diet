import React from 'react';
import Styles from './styles';

import ProfileImage from '../../../global/assets/profile.png';
import { ProgressBarWelcome } from '../../../components/ProgressBar';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Card } from '../../../components/Card';

const Initial: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Content>
          <Styles.Title>Olá Geissy</Styles.Title>
          <Styles.Message>
            Alimentar-se bem é viver em constante evolução e não 
            regressão, é cuidar de sí.
          </Styles.Message>
        </Styles.Content>
        
        <Styles.ProfileAvatarContainer>
          <Styles.ProfileAvatarImage source={ProfileImage}/>
        </Styles.ProfileAvatarContainer>
      </Styles.Header>

      <Styles.ProgressBarWelcomeContainer>

        <Styles.LabelContainer>
          <Styles.TitleProgressBar>Meu Progresso</Styles.TitleProgressBar>
          <Styles.TitleProgressBar>2/40</Styles.TitleProgressBar>  
        </Styles.LabelContainer>
        <ProgressBarWelcome 
          progress={0.1}
          styles={{
            height:24,
            color: "#74A065",
            borderRadius: 15,
            width:380
          }} 
        />
      </Styles.ProgressBarWelcomeContainer>


      <Styles.ContainerMeals>
        <Styles.TitleMeal>
          Refeições
        </Styles.TitleMeal>

        <FlatList 
          data={[0, 1, 2, 3]}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 16,
          }}
          renderItem={() => (
            <Card title="Café da manhã" hour="9:00" />
          )}
        />
      </Styles.ContainerMeals>
    </Styles.Container>
  );
}

export default Initial;