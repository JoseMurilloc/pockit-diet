import styled from 'styled-components/native'

export const ContainerButton = styled.View`
  margin-top: 24px;
`;

export const LabelInput = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: 4px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FDFDFD;

  padding: 0 24px;
`;

export const Header = styled.View`
  margin-top: 40px;
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  padding: 70px 24px;
  padding-bottom: 68px;
  z-index: 10;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const Description = styled.Text`
  width: 235px;
  font-size: 12px;
  line-height: 14px;
  margin-top: 5px;
  margin-bottom: 24px;
  color: ${({theme}) => theme.colors.text};
`;


export const InputContainer = styled.View`
  width: 318px;
  height: 54px;
  border: 1px solid #406334;
  background: #F0F0F0;
  border-radius: 8px;
`;

export const Input = styled.TextInput``;
export const ContainerInput = styled.View``;
export const Label = styled.Text``;

export const ForgotPassword = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const ForgotPasswordText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  margin-top: 4px;
`;

export const PlantImageTop = styled.Image`
  position: absolute; 
  right: 12%; 
  top: 0%;
`;

export const PlantImageBottom = styled.View`
  position: absolute; 
  left: 0%;
  bottom: 7%;
`;