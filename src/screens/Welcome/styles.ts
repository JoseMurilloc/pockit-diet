import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 16px;

  justify-content: flex-end;
  align-items: flex-end;
`;
export const ButtonJump = styled.TouchableOpacity`
  width: 73px;
  height: 51px;
  margin-top: 40px;

  justify-content: center;
  align-items: center;

  border: 1px solid rgba(20, 20, 20, 0.3);
  border-radius: 8px;
`;
export const ButtonJumpText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_light};
`;

export const ContentPicture = styled.View`
  width: 100%;
  margin-top: 42px;
  margin-bottom: 33px;
`;
export const ImageWelcome = styled.Image``;


export const ContentProgressBar = styled.View`
  width: 100%; 
  height: 20px;
  padding: 0 31px;
  margin-bottom: 32px;
`;

export const ContentMain = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 24px;
  line-height: 28px;
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 8px;
`;
export const Message = styled.Text`
  width: 324px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #3E3E3E;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: 32px;
`;