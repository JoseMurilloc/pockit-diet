import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0 16px;
`;

const Header = styled.View`
  flex-direction: row;
  width: 100%;
`;
const Content = styled.View`
  width: 79%;
  margin-top: 80px;
`;
const Title = styled.Text`
  font-size: 24px;
  line-height: 28px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
  margin-bottom: 4px;
`;
const Message = styled.Text`
  height: 32px;
  width: 318px;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme}) => theme.colors.text_super_light};
  
  font-family: ${({theme}) => theme.fonts.regular};
`;
const ProfileAvatarContainer = styled.View`
  margin-top: 32px;
`;
const ProfileAvatarImage = styled.Image`
  border-radius: 30px;
`;

const ProgressBarWelcomeContainer = styled.View`
  margin-top: 32px;
`;
const TitleProgressBar = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: 8px;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerMeals = styled.View`
  margin-top: 32px;
`;

const TitleMeal = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 22px;
  line-height: 26px;
`;


const Styles = {
  Container,
  Header,
  Title,
  Content,
  Message,
  ProfileAvatarContainer,
  ProfileAvatarImage,
  ProgressBarWelcomeContainer,
  TitleProgressBar,
  LabelContainer,
  ContainerMeals,
  TitleMeal,
}

export default Styles