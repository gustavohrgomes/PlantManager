import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 32px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const Subtitle = styled.Text`
  width: 300px;
  font-family: ${fonts.text};
  text-align: center;
  font-size: 17px;
  padding: 0 20px;
  color: ${colors.heading};
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;
