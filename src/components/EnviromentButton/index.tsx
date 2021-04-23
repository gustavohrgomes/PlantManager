import React from 'react';
import { Text } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  ButtonContainer,
  ButtonText,
  ButtonActiveContainer,
  ButtonActiveText,
} from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  title: String;
  active?: Boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...props
}: EnvironmentButtonProps) {
  if (active) {
    return (
      <ButtonActiveContainer {...props}>
        <ButtonActiveText>{title}</ButtonActiveText>
      </ButtonActiveContainer>
    );
  }
  return (
    <ButtonContainer {...props}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
