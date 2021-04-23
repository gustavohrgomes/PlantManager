import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const ButtonContainer = styled(RectButton)`
  height: 40px;
  background: ${colors.shape};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-right: 5px;
  padding: 8px 16px;
`;

export const ButtonText = styled.Text`
  font-size: 13px;
  font-family: ${fonts.complements};
  color: ${colors.heading};
`;

export const ButtonActiveContainer = styled(ButtonContainer)`
  background: ${colors.green_light};
`;

export const ButtonActiveText = styled(ButtonText)`
  font-family: ${fonts.heading};
  color: ${colors.green_dark};
`;
