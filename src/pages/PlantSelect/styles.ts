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

export const EnviromentTextContainer = styled.View`
  margin-top: 35px;
`;

export const Enviroments = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  max-height: 40px;
  margin: 32px 0 32px 32px;
`;

export const Plants = styled.FlatList`
  flex: 1;
`;
