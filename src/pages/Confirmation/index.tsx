import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, Content, Title, Subtitle, Emoji, Footer } from './styles';

import { Button } from '../../components/Button';
import { useRoute } from '@react-navigation/native';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <Subtitle>{subtitle}</Subtitle>

        <Footer>
          <Button text={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
}
