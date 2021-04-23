import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface TypeNameProps {
  isFocused: Boolean;
}

export const Container = styled.TouchableWithoutFeedback`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 54px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  margin-top: 24px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${colors.gray}`,
})<TypeNameProps>`
  width: 100%;
  font-size: 18px;
  color: ${colors.heading};
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  border-bottom-width: 1px;
  border-color: ${props => (props.isFocused ? colors.green : colors.gray)};
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;
