import React from 'react';

import { Animation, Container } from './styles';

import loadAnimation from '../../assets/load.json';

export function Load() {
  return (
    <Container>
      <Animation source={loadAnimation} autoPlay loop />
    </Container>
  );
}
