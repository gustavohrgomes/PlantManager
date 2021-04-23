import React from 'react';
import { View } from 'react-native';

import { Container, Greeting, UserImage, UserName } from './styles';

import profile from '../../../assets/profile.jpeg';

export function Header() {
  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>Gustavo</UserName>
      </View>

      <UserImage source={profile} />
    </Container>
  );
}
