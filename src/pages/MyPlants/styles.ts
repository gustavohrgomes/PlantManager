import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 25px 32px 0;
  background: ${colors.white};
`;

export const Spotlight = styled.View`
  background: ${colors.blue_light};
  padding: 0 20px;
  margin-top: 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 15px;
  line-height: 18px;
  text-align: justify;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  margin: 15px 0;
  color: ${colors.body_dark};
`;

export const PlantsToWater = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
