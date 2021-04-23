import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, Content, Title, Subtitle, Emoji, Footer } from './styles';

import { Button } from '../../components/Button';

export function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate('PlantSelect');
  }

  return (
    <Container>
      <Content>
        <Emoji>😁</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas {'\n'}
          plantinhas com muito cuidado.
        </Subtitle>

        <Footer>
          <Button text="Começar" onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
}
