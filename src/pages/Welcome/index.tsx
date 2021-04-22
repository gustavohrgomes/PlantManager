import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';

import { Container, Title, Subtitle, Image, ButtonContainer } from './styles';

import watering from '../../assets/watering.png';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Title>

      <Image source={watering} resizeMode="contain" />

      <Subtitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Subtitle>

      <ButtonContainer activeOpacity={0.8} onPress={handleStart}>
        <Icon name="arrow-forward-ios" size={20} color="white" />
      </ButtonContainer>
    </Container>
  );
}
