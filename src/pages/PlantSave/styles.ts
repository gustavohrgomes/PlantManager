import styled from 'styled-components/native';
import { SvgFromUri } from 'react-native-svg';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const ScrollViewContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  background: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.shape};
  margin: 20px 30px;
`;

export const PlantImage = styled(SvgFromUri)``;

export const PlantName = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  font-size: 17px;
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.body_dark};
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const PlantControllers = styled.View`
  background: ${colors.white};
  padding: 20px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  color: ${colors.blue};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  font-size: 12px;
  font-family: ${fonts.complements};
  text-align: center;
  color: ${colors.heading};
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 40px;
  padding: 4px 0;
  background: ${colors.shape};
`;

export const DateTimePickerText = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  color: ${colors.body_dark};
  text-align: center;
`;
