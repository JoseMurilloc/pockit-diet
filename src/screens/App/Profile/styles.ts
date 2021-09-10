import styled, { css } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`; 

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  height: 266px;
  justify-content: center;
  border-radius: 7px;
  padding: 0 14px;
`;

export const ImageProfile = styled.Image`
  width: 87px;
  height: 82px;
  border-radius: 45px;
  margin-bottom: 15px;
`;

export const ContainerProfileImage = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.View`
  width: 100%;
  margin-left: 4px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-bottom: 4px;

  color: ${({theme}) => theme.colors.text};
`;

export const Objective = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-bottom: 6px;

  color: ${({theme}) => theme.colors.text};
`;

export const DataInfo = styled.View`
  flex-direction: row;
`;

export const WeightCurrent = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.medium};

  color: ${({theme}) => theme.colors.text};
`;
export const Goal = styled.Text`
  font-size: 16px;
  margin-left: 11px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.medium};

  color: ${({theme}) => theme.colors.text};
`;

export const ButtonExit = styled.TouchableOpacity`
  width: 133px;
  height: 40px;
  padding: 0 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;  
  
  background: rgba(255, 156, 156, 0.5);
  border-radius: 8px;
`;

export const Section = styled.View`
  padding: 0 16px;
`;

export const IconExit = styled(MaterialCommunityIcons)`

`;

export const ButtonExitText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #570C0C;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-left: 6px;
`;

export const SkinFoldsContainer = styled.View`
  margin-bottom: 24px;
`;

export const LineCards = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #131313;
  margin-bottom: 16px;
`;

export const CardFolds = styled.View`
  width: 118.4px;
  height: 82.65px;
  background: #FFFFFF;
  border: 0.55848px solid rgba(0, 0, 0, 0.09);
  border-radius: 4.46784px;
  justify-content: center;
  align-items: center;
  margin-right: 13px;  
`;
export const NameFolds = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #308E10;
`;

export const Measure = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: ${({theme}) => theme.colors.text};
  margin-top: 5.5px;
`; 

export const PhysicalAssessment = styled.View`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const PhysicalContent = styled.View``;

export const LineFatBody = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
`;


type PointProps = {
  type: 'muscle' | 'fat'
}

export const Point = styled.View<PointProps>`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${({type}) => type === 'fat' ? '#DA6483' : '#639FD9'};
  margin-right: 7px;
`;

export const Text = styled.Text``;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;