import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'

const Container = styled(ScrollView)`
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
  border-radius: 27px;
  width: 56px;
  height: 56px;
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

const InfoPro = styled.View`
  margin-bottom: 36px;
`;
const TitlePro = styled.Text`
  font-size: 22px;
  line-height: 26px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
  margin-bottom: 16px;
  margin-top: 16px;
`;
const ContainerPro = styled.View`
  background: #ECEDEE;
  border-radius: 8px;
  width: 382px;
  height: 152px;
  padding: 16px 16px;
`;
const HeaderPro = styled.View`
  flex-direction: row;
`;
const ProfileAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;
const ContentPro = styled.View`
  margin-left: 8px;
`;
const NamePro = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
`;
const CRN = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: 4px;
`;

const LocalService = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
  margin-top: 16px;
`;
const Address = styled.View`
  flex-direction: row;
  margin-top: 9px;
`;
const AddressIcon = styled(MaterialIcons)`
  margin-right: 7px;
`;
const AddressText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: #454749;
`;


const Styles = {
  LocalService,
  Address,
  AddressIcon,
  AddressText,
  InfoPro,
  ContainerPro,
  HeaderPro,
  ProfileAvatar,
  ContentPro,
  NamePro,
  CRN,
  TitlePro,
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