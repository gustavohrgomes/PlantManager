import React from 'react';
import { Text } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  ButtonContainer,
  ButtonText,
  ButtonActiveContainer,
  ButtonActiveText,
} from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: String;
  active?: Boolean;
}

export function EnviromentButton({
  title,
  active = false,
  ...props
}: EnviromentButtonProps) {
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
