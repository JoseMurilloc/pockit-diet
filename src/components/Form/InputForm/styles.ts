import styled from 'styled-components/native';

export const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.colors.error};
  font-family: ${({theme}) => theme.fonts.medium};
`;