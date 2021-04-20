import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export default function Button({ text, ...props }: ButtonProps): JSX.Element {
  return (
    <ButtonContainer activeOpacity={0.6} {...props}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
