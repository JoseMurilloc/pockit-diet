import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`; 

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  height: 266px;
  justify-content: center;
  border-radius: 7px;
  padding: 0 14px;
`;

export const Back = styled.View`

  position: absolute;
  left: 20px;
  top: 30px;

  background: rgba(19, 19, 19, 0.03);
  border-radius: 2px;
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 87px;
  height: 82px;
  border-radius: 45px;
  margin-bottom: 15px;
`;

export const ContainerProfileImage = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.View`
  width: 100%;
  margin-left: 4px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-bottom: 4px;

  color: ${({theme}) => theme.colors.text};
`;

export const Objective = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-bottom: 6px;

  color: ${({theme}) => theme.colors.text};
`;

export const DataInfo = styled.View`
  flex-direction: row;
`;

export const WeightCurrent = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.medium};

  color: ${({theme}) => theme.colors.text};
`;
export const Goal = styled.Text`
  font-size: 16px;
  margin-left: 11px;
  line-height: 19px;
  font-family: ${({theme}) => theme.fonts.medium};

  color: ${({theme}) => theme.colors.text};
`;