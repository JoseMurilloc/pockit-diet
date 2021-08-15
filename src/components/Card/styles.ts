import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(TouchableOpacity)`
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


const Styles = {
  Container,
  Title,
  Hour,
  HourMeal,
}

export default Styles