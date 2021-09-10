import React from 'react';
import Styles from './styles';

import ProfileImage from '../../../global/assets/profile.png';
import { ProgressBarWelcome } from '../../../components/ProgressBar';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Card } from '../../../components/Card';
import { useTheme } from 'styled-components';

const Initial: React.FC = () => {
  const theme = useTheme()

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
            color: theme.colors.primary,
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
            <Card 
              title="Café da manhã" 
              hour="9:00"
              meals={[
                {
                  name: "Cuscus 80g",
                  calories: "190 kcal"
                },
                {
                  name: "Suco de fruta 200ml",
                  calories: "80 kcal"
                },
                {
                  name: "Suco de fruta de Uva 200ml",
                  calories: "80 kcal"
                }
              ]}
            />
          )}
        />
      </Styles.ContainerMeals>
      
      <Styles.InfoPro>
        <Styles.TitlePro>Meu Profissional</Styles.TitlePro>
        <Styles.ContainerPro>
          <Styles.HeaderPro>
            <Styles.ProfileAvatar source={ProfileImage} />
            <Styles.ContentPro>
              <Styles.NamePro>Sabrina Oliveira</Styles.NamePro>
              <Styles.CRN>CRN</Styles.CRN>
            </Styles.ContentPro>
          </Styles.HeaderPro>
          
          <Styles.LocalService>
            Localizaçao do atendimento
          </Styles.LocalService>

          <Styles.Address>
            <Styles.AddressIcon 
              name="location-pin" 
              size={15}
              color="#208BC8"  
            />
            <Styles.AddressText>
              Rua jose maria - Petrolina-PE
            </Styles.AddressText>
          </Styles.Address>
        </Styles.ContainerPro>
      </Styles.InfoPro>
    </Styles.Container>
  );
}

export default Initial;