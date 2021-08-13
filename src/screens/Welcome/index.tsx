import React from 'react';
import {WelcomeLayout} from './welcomeLayout'


const Welcome: React.FC = () => {
  const [indexPage, setIndexPage] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const contentMessages = [
    {
      title: 'Plano alimentar', 
      message: 'Sua dieta em qualquer lugar a qualquer hora do dia.'
    },
    {
      title: 'Receitas incríveis', 
      message: 'Tenha acesso a receitas saudáveis que vão abranger seu paladar.'
    },
    {
      title: 'Saúde e autoestima', 
      message: 'Viva uma vida mais saudavel e conquiste o corpo que você sempre sonhou.'
    }
  ];
  const MAX_PAGE_COUNT = indexPage < 2;


  React.useEffect(() => {
    if (indexPage <= 2) {
      setProgress(state => state + 0.36)
    }
  }, [indexPage])

  function handleNextPage() {
    if (MAX_PAGE_COUNT) {
      setIndexPage(state => state + 1);
    } else {
      // TODO
    }
  }


  return (
    <WelcomeLayout 
      data={{
        MAX_PAGE_COUNT, 
        contentMessages, 
        indexPage, 
        progress, 
        handleNextPage
      }}
    />
  );
}

export default Welcome;