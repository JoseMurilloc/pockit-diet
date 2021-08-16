import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.5
})`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  background-color: ${({theme}) => theme.colors.background};
  border: 1px solid rgba(14, 14, 14, 0.1);
  border-radius: 16px;
  margin-bottom: 12px;
`;
const Title = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
`;
const HourMeal = styled.View`
  height: 100%;
  width: 83px;

  background: #74A065;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;
const Hour = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  font-family: ${({theme}) => theme.fonts.regular};
`;

/**
 * Card open
 */

const ContainerOpen = styled(TouchableOpacity).attrs({
  activeOpacity: 0.5
})`
  width: 100%;
  height: 173px;
  border: 1px solid rgba(14, 14, 14, 0.1);
  border-radius: 16px;
  margin-bottom: 12px;
`;
const HeaderOpen = styled.View`
  width: 100%;
  height: 47px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: #638D55;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;
const TitleOpen = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`;

const Meals = styled.View`
  width: 100%;
  padding: 16px 25px;
`;

const LineMeal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const LineMealText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
`;
const LineMealCalories = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
`;

const LineBorder = styled.View`
  border-width: 0.5px;
  border-color: #61656A;
  border-style: dashed;
  width: 35%;
`;

const Styles = {
  Container,
  Title,
  Hour,
  HourMeal,
  ContainerOpen,
  HeaderOpen,
  TitleOpen,
  LineMeal,
  LineMealText,
  LineMealCalories,
  Meals,
  LineBorder
}

export default Styles