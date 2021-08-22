import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0 16px;
`;
export const Header = styled.View`
  padding-top: 56px;
`;
export const TitleHeader = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
  margin-bottom: 4px;
`;
export const MessageHeader = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #454749;
  font-family: ${({theme}) => theme.fonts.regular};
  width: 307px;
`;
