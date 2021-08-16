import React from 'react';
import Styles from "./styles";

type Props = {
  title: string;
  hour: string;
  meals: Array<{
    name: string;
    calories: string; 
  }>
}


export function Card({title, hour, meals}: Props) {
  const [open, setOpen] = React.useState(false);

  function handleOpenCardMeal() {
    setOpen(state => !state)
  }

  if (open) {
    return (
      <Styles.ContainerOpen onPress={handleOpenCardMeal}>
        <Styles.HeaderOpen>
          <Styles.TitleOpen>{title} Open</Styles.TitleOpen>
          <Styles.Hour>{hour}</Styles.Hour>
        </Styles.HeaderOpen>

        <Styles.Meals>
          {meals.map(item => (
            <Styles.LineMeal key={item.name}>
              <Styles.LineMealText>{item.name}</Styles.LineMealText>
              <Styles.LineBorder />
              <Styles.LineMealCalories>{item.calories}</Styles.LineMealCalories>
            </Styles.LineMeal>
          ))}
        </Styles.Meals>
      </Styles.ContainerOpen>
    );
  }


  return (
    <Styles.Container onPress={handleOpenCardMeal}>
      <Styles.Title>{title}</Styles.Title>
      <Styles.HourMeal>
        <Styles.Hour>{hour}</Styles.Hour>
      </Styles.HourMeal>
    </Styles.Container>    
  );
}