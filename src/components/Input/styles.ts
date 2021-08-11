import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 54px;
  flex-direction: row;
  align-items: center;
  padding: 0 17px;
  background: #F0F0F0;
  border: 0.5px solid #949494;
  border-radius: 8px;
`;

export const Input = styled(TextInput)`
  height: 100%;
  width: 95%;
  margin-left: 10px;
`;
