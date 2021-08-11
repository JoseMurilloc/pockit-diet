import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  width: 144px;
  height: 51px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
