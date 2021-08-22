import styled from 'styled-components/native';


export const ReplacementContainer = styled.View`
  margin-top: 24px;
`;
export const  TitleReplacement = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
  margin-bottom: 8px;
`;


export const ReplacementGrid = styled.View`
`;

export const ReplacementLine = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

type CardRevenueReplacementProps = {
  separator?: boolean;
}

export const CardRevenueReplacement = styled.View<CardRevenueReplacementProps>`
  background: rgba(20, 20, 20, 0.05);
  border-radius: 8px;
  width: 179px;
  height: 56px;

  flex-direction: row;
  align-items: center;

  margin-left: ${({separator}) => separator ? 8 : 0}px;
`;

export const RevenueImage = styled.Image`
  height: 100%;
  width: 62px;
  border-top-right-radius: 8px;
  border-top-left-radius: 2px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 2px;
`;

export const NameRevenue = styled.Text`
  font-size: 14px;
  line-height: 16px;

  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  margin-left: 12px;
`;
