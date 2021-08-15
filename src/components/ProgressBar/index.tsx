import React from 'react';
import ProgressBar from 'react-native-progress/Bar';

type Props = {
  progress: number;
  styles: {
    color: string;
    borderRadius: number;
    height: number;
    width: number;
  }
}

export function ProgressBarWelcome({
  progress,
  styles,
}: Props) {
  return (
    <ProgressBar
      progress={progress} 
      width={styles.width} 
      height={styles.height}
      color={styles.color}
      borderRadius={styles.borderRadius}
    />
  );
}
