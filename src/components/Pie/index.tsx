import React from 'react';
import PieChart from 'react-native-pie-chart';

type physicalAssessmentType = {
  percent: number
  color: string
}

interface PieProps {
  data: Array<physicalAssessmentType>
}

export function Pie({data}: PieProps) {
  const widthAndHeight = 140
  const series = [123, 321]
  const sliceColor = ['#DA6483','#639fd9']

  return (
    <PieChart
      widthAndHeight={widthAndHeight}
      series={series}
      sliceColor={sliceColor}
    />
  )
}

