import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${colors.background};
`;

export const HeaderContainer = styled.View`
  padding-top: 25px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-family: ${fonts.medium};
  color: ${colors.body_dark};
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  color: ${colors.body_dark};
`;

export const EnvironmentTextContainer = styled.View`
  margin-top: 35px;
`;

export const Environments = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  max-height: 40px;
  margin: 32px 0 32px 32px;
`;

export const PlantsContainer = styled.View`
  flex: 1;
  margin: 0 32px;
`;

export const Plants = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  flex: 1;
`;
