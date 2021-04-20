import React from 'react';

import { Container, Title, Subtitle, Image } from './styles';

import watering from '../../assets/watering.png';

import Button from '../../components/Button';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Title>

      <Image source={watering} />

      <Subtitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Subtitle>

      <Button text=">" />
    </Container>
  );
}
