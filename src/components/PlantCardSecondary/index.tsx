import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import {
  PlantContainer,
  PlantDetails,
  PlantName,
  Time,
  TimeLabel,
} from './styles';

interface PlantProps extends RectButtonProps {
  name: string;
  photo: string;
  hour: string;
}

export const PlantCardSecondary = ({
  name,
  photo,
  hour,
  ...props
}: PlantProps) => {
  return (
    <PlantContainer {...props}>
      <SvgFromUri uri={photo} width={50} height={50} />
      <PlantName>{name}</PlantName>
      <PlantDetails>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{hour}</Time>
      </PlantDetails>
    </PlantContainer>
  );
};
