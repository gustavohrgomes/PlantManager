import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { PlantContainer, PlantName } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: String;
    photo: String;
  };
}

export const PlantCardPrimary = ({ data, ...props }: PlantProps) => {
  return (
    <PlantContainer {...props}>
      <PlantName>{data.name}</PlantName>
    </PlantContainer>
  );
};
