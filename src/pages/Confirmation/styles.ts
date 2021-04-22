import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  color: ${colors.heading};
  text-align: center;
`;

export const Emoji = styled.Text`
  font-size: 78px;
  margin-bottom: 64px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 55px;
`;
