import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`;

export const UserName = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 35px;
`;

export const UserImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;
