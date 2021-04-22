import React from 'react';
import { Container, Content, Title, Subtitle, Emoji, Footer } from './styles';

import { Button } from '../../components/Button';

export function Confirmation() {
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
          <Button text="Começar" />
        </Footer>
      </Content>
    </Container>
  );
}
