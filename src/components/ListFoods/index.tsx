import React from 'react';

import {  
  ReplacementGrid,
  ReplacementContainer,
  TitleReplacement,
  CardRevenueReplacement,
  ReplacementLine,
  RevenueImage,
  NameRevenue,
} from './styles';

type ListFoodsProps = {
  category: string;
}

const ListFoods: React.FC<ListFoodsProps> = ({ category }) => {
  return (
    <ReplacementContainer>
      <TitleReplacement>{category}</TitleReplacement>
      <ReplacementGrid>
        <ReplacementLine>
        <CardRevenueReplacement>
          <RevenueImage source={{ uri: "https://cdn.noticiasagricolas.com.br/dbimagens/soja-5qZSH.jpg" }} />
          <NameRevenue>Soja</NameRevenue>
        </CardRevenueReplacement>
        <CardRevenueReplacement separator={true}>
          <RevenueImage source={{ uri: "https://cdn.noticiasagricolas.com.br/dbimagens/soja-5qZSH.jpg" }} />
          <NameRevenue>Soja</NameRevenue>
        </CardRevenueReplacement>
      </ReplacementLine>
        <ReplacementLine>
          <CardRevenueReplacement>
            <RevenueImage source={{ uri: "https://cdn.noticiasagricolas.com.br/dbimagens/soja-5qZSH.jpg" }} />
            <NameRevenue>Soja</NameRevenue>
          </CardRevenueReplacement>
          <CardRevenueReplacement separator={true}>
            <RevenueImage source={{ uri: "https://cdn.noticiasagricolas.com.br/dbimagens/soja-5qZSH.jpg" }} />
            <NameRevenue>Soja</NameRevenue>
          </CardRevenueReplacement>
        </ReplacementLine>
        <ReplacementLine>
        <CardRevenueReplacement>
          <RevenueImage source={{ uri: "https://cdn.noticiasagricolas.com.br/dbimagens/soja-5qZSH.jpg" }} />
          <NameRevenue>Soja</NameRevenue>
        </CardRevenueReplacement>
        <CardRevenueReplacement separator={true}>
          <RevenueImage source={{ uri: "https://cdn.noticiasagricolas.com.br/dbimagens/soja-5qZSH.jpg" }} />
          <NameRevenue>Soja</NameRevenue>
        </CardRevenueReplacement>
      </ReplacementLine>
    </ReplacementGrid>
  </ReplacementContainer>
  )
}

export default ListFoods;