import React, { useState, useEffect } from 'react';

import { 
  Container,
  Header,
  ImageProfile,
  Info,
  Name,
  Objective,
  WeightCurrent,
  Goal,
  DataInfo,
  ContainerProfileImage,
  ButtonExit,
  ButtonExitText,
  IconExit,
  Section,
  SkinFoldsContainer,
  Title,
  CardFolds,
  Measure,
  NameFolds,
  LineCards,
  PhysicalAssessment,
  PhysicalContent,
  LineFatBody,
  Point,
  Text,
  Content
} from './styles';

import ProfileImage from '../../../global/assets/profile.png';
import { Pie } from '../../../components/Pie';
type physicalAssessmentType = {
  percent: number
  color: string
}

const Profile: React.FC = () => {

  const [physicalAssessmentData, setPhysicalAssessmentData] = useState<physicalAssessmentType[]>([]);

  useEffect(() => {
    setPhysicalAssessmentData([
      {
        percent: 17,
        color: '#DA6491'
      },
      {
        percent: 83,
        color: '#648BDA'
      }
    ])
  }, [])

  return (
    <Container>
      <Header>
        <ContainerProfileImage>
          <ImageProfile 
            source={ProfileImage}
          />
        </ContainerProfileImage>

        <Info>
          <Name>Safira Martis</Name>
          <Objective>Objetivo: perca de peso</Objective>
          <DataInfo>
            <WeightCurrent>Peso atual: 52kg</WeightCurrent>
            <Goal>Meta: 50kg</Goal>
          </DataInfo>
        </Info>
      </Header>


      <Section>

        <PhysicalAssessment>
          <Title>Avaliação física</Title>
          <Content>
            <Pie
              data={physicalAssessmentData}
            />
            <PhysicalContent>
              <LineFatBody>
                <Point type="muscle" />
                <Text>83% (Massa magra)</Text>
              </LineFatBody>
              <LineFatBody>
                <Point type="fat" />
                <Text>17% (Gordura corporal)</Text>
              </LineFatBody>
            </PhysicalContent>      
          </Content>   
        </PhysicalAssessment>

        <SkinFoldsContainer>
          <Title>Pregas Cutâneas</Title>
          <LineCards>
            <CardFolds>
              <NameFolds>Triceps</NameFolds>
              <Measure>17.0 mm</Measure>
            </CardFolds>
            <CardFolds>
              <NameFolds>Triceps</NameFolds>
              <Measure>17.0 mm</Measure>
            </CardFolds>
            <CardFolds>
              <NameFolds>Triceps</NameFolds>
              <Measure>17.0 mm</Measure>
            </CardFolds>
          </LineCards>
          <LineCards style={{marginTop: 13}}>
            <CardFolds>
              <NameFolds>Triceps</NameFolds>
              <Measure>17.0 mm</Measure>
            </CardFolds>
            <CardFolds>
              <NameFolds>Triceps</NameFolds>
              <Measure>17.0 mm</Measure>
            </CardFolds>
            <CardFolds>
              <NameFolds>Triceps</NameFolds>
              <Measure>17.0 mm</Measure>
            </CardFolds>
          </LineCards>
          
        </SkinFoldsContainer>

        <ButtonExit>
          <IconExit 
            name="exit-to-app" 
            size={24} 
            color="#570C0C" 
          />
          <ButtonExitText>Sair da conta</ButtonExitText>
        </ButtonExit>
      </Section>
    </Container>
  );
}

export default Profile;