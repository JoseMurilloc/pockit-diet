import React from 'react';
import Styles from "./styles";

type Props = {
  title: string;
  hour: string;
}

export function Card({title, hour}: Props) {
  return (
    <Styles.Container>
      <Styles.Title>{title}</Styles.Title>
      <Styles.HourMeal>
        <Styles.Hour>{hour}</Styles.Hour>
      </Styles.HourMeal>
    </Styles.Container>    
  );
}