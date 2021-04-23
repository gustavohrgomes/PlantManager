import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const PlantContainer = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  height: 155px;
  background: ${colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
  justify-content: space-around;
`;

export const PlantName = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;
