import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { PlantContainer, PlantName } from './styles';

interface PlantProps extends RectButtonProps {
  name: string;
  photo: string;
}

export const PlantCardPrimary = ({ name, photo, ...props }: PlantProps) => {
  return (
    <PlantContainer {...props}>
      <SvgFromUri uri={photo} width={74} height={90} />
      <PlantName>{name}</PlantName>
    </PlantContainer>
  );
};
