import { TextInput } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isError: boolean,
}


export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 54px;
  flex-direction: row;
  align-items: center;
  padding: 0 17px;
  
  ${props => props.isError ? css`
    border: 1px solid ${({theme}) => theme.colors.error};
    background: ${({theme}) => theme.colors.error_light};
  ` : css `
    border: 0.5px solid #949494;
    background: ${({theme}) => theme.colors.shape};
  `}

  border-radius: 8px;
`;

export const Input = styled(TextInput)`
  height: 100%;
  width: 95%;
  margin-left: 10px;
`;