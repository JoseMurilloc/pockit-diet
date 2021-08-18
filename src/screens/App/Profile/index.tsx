import React from 'react';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { 
  Container,
  Header,
  Back,
  ImageProfile,
  Info,
  Name,
  Objective,
  WeightCurrent,
  Goal,
  DataInfo,
  ContainerProfileImage,
} from './styles';

import ProfileImage from '../../../global/assets/profile.png';

const Profile: React.FC = () => {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Back>
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color={theme.colors.text}
          />
        </Back>

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

          {/* <PhysicalAssessment>
            <GraphicPizza />
          </PhysicalAssessment> */}
        </Info>
      </Header>
    </Container>
  );
}

export default Profile;