import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const PlantContainer = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  margin: 5px 0;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background: ${colors.shape};
`;

export const PlantName = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 17px;
`;

export const PlantDetails = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;
