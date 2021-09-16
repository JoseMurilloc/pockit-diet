import { useNavigation } from '@react-navigation/core';
import React from 'react';

import Styles from './styles';

function Revenues () {

  const navigation = useNavigation()

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Receitas</Styles.Title>
        <Styles.Message>
          Se delicie com receitas saudáveis, fáceis e que vão te ajudar a manter o foco.
        </Styles.Message>
      </Styles.Header>

      <Styles.RevenuesList>
        <Styles.TitleCategory>Salada</Styles.TitleCategory>
      
        <Styles.ListRevenues 
          data={[0,1,2,3]}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={item => (
            <Styles.CardContainer 
              onPress={() => navigation.navigate('RevenueDetail')}
            >
              <Styles.CardRevenue>
                <Styles.RevenueImage 
                  source={{uri: 'https://www.lecard.com.br/wp-content/uploads/2018/07/Cart%C3%A3o-Refei%C3%A7%C3%A3o-Saiba-a-import%C3%A2ncia-de-ter-um.jpg'}}
                />
                <Styles.ContentInfo>
                  <Styles.TitleRevenue>Salada divertida</Styles.TitleRevenue>
                  <Styles.Ingredients>
                    Ingredientes: ovo, tomate, peixe etc...
                  </Styles.Ingredients>

                  <Styles.CaloriesTotal>
                    <Styles.CaloriesTotalText>
                      356 kcal
                    </Styles.CaloriesTotalText>
                  </Styles.CaloriesTotal>
                </Styles.ContentInfo>
              </Styles.CardRevenue>
            </Styles.CardContainer>
          )}
        />
      </Styles.RevenuesList>

      <Styles.RevenuesList>
        <Styles.TitleCategory>Salgados fits</Styles.TitleCategory>
      
        <Styles.ListRevenues 
          data={[0,1,2,3]}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={item => (
            <Styles.CardContainer>
              <Styles.CardRevenue>
                <Styles.RevenueImage 
                  source={{uri: 'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/10/shutterstock_426457600.jpg'}}
                />
                <Styles.ContentInfo>
                  <Styles.TitleRevenue>Salada divertida</Styles.TitleRevenue>
                  <Styles.Ingredients>
                    Ingredientes: ovo, tomate, peixe etc...
                  </Styles.Ingredients>

                  <Styles.CaloriesTotal>
                    <Styles.CaloriesTotalText>
                      356 kcal
                    </Styles.CaloriesTotalText>
                  </Styles.CaloriesTotal>
                </Styles.ContentInfo>
              </Styles.CardRevenue>
            </Styles.CardContainer>
          )}
        />
      </Styles.RevenuesList>
    </Styles.Container>
  );
}

export default Revenues;