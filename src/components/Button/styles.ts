import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const ButtonContainer = styled.TouchableOpacity`
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: ${colors.green};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: #fff;
`;
