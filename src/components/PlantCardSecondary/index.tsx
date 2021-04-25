import React from 'react';
import { Animated, View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SvgFromUri } from 'react-native-svg';

import {
  ButtonRemove,
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
  handleRemove: () => void;
}

export const PlantCardSecondary = ({
  name,
  photo,
  hour,
  handleRemove,
  ...props
}: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove onPress={handleRemove}>
              <MaterialIcons name="delete-outline" size={32} color="white" />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}>
      <PlantContainer {...props}>
        <SvgFromUri uri={photo} width={50} height={50} />
        <PlantName>{name}</PlantName>
        <PlantDetails>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{hour}</Time>
        </PlantDetails>
      </PlantContainer>
    </Swipeable>
  );
};
