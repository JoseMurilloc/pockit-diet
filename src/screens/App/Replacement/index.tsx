import React from 'react';
import ListFoods from '../../../components/ListFoods';

import { 
  Container,
  Header,
  TitleHeader,
  MessageHeader,
} from './styles';

const Replacement: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleHeader>Lista de substituições</TitleHeader>
        <MessageHeader>
          A lista consiste em opções de outros alimentos benéficos para sua alimentação.
        </MessageHeader>
      </Header>

      <ListFoods category="Proteínas" />
      <ListFoods category="Carboidratos" />
      <ListFoods category="Gorduras" />

     
    </Container>
  )
}

export default Replacement;