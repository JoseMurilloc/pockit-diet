import styled from 'styled-components/native';
import { FlatList, RectButton, ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';


const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};

  `;
const Header = styled.View`
  padding: 0 14px;
  padding-top: 38px;
`;

const Message = styled.Text`
  width: 307px;
  height: 32px;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme}) => theme.colors.text_super_light};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: 4px;
`;

const Title = styled.Text`
  margin-top: 16px;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text};
`;

const RevenuesList = styled.View`
  padding-left: 14px;
`;
const TitleCategory = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.success_text};
  margin-bottom: 16px;
  margin-top: 32px;
`;
const ListRevenues = styled(FlatList)`
  height: ${RFValue(390)}px;
  width: 100%;
`;

const CardContainer = styled(RectButton)`
  width: 183px;
  height: 100%;  
`;

const CardRevenue = styled.View.attrs({
  elevation: 4,
})`
  background: #F1F1F1;
  width: 95%;
  height: 95%;
  border-radius: 16px;
  margin-right: 8px;
`;


const RevenueImage = styled.Image`
  width: 100%;
  height: ${RFValue(264)}px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const ContentInfo = styled.View`
  height: 100%;
  width: 100%;
  position: relative;

  padding: 12px 8px;
`;

const TitleRevenue = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
`;
const Ingredients = styled.Text`
  width: 135px;
  height: 28px;
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};

  margin-top: 4px;
`;

const CaloriesTotal = styled.View`
  width: 62px;
  height: 30px;
  background: ${({theme}) => theme.colors.primary};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 66px;
`;

const CaloriesTotalText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.fonts.medium};
`;

const Styles = {
  Container,
  Header,
  Title,
  Message,
  RevenuesList,
  TitleCategory,
  ListRevenues,
  CardRevenue,
  CardContainer,
  RevenueImage,
  ContentInfo,
  TitleRevenue,
  Ingredients,
  CaloriesTotal,
  CaloriesTotalText
}

export default Styles;