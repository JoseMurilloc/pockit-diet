import React from 'react';
import ProgressBar from 'react-native-progress/Bar';

type Props = {
  progress: number;
}

export const ProgressBarWelcome: React.FC<Props> = ({progress}) => {
  return (
    <ProgressBar
      progress={progress} 
      width={325} 
      height={11}
      color="#37582B"
      borderRadius={8}
    />
  );
}
