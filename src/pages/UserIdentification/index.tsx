import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';
import {
  Container,
  Content,
  Form,
  Title,
  Emoji,
  Input,
  Footer,
} from './styles';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>('');

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name) {
      return Alert.alert('Diz pra mim qual o seu nome 😢');
    }

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch (error) {}
  }

  return (
    <Container onPress={Keyboard.dismiss}>
      <Content>
        <Form>
          <Emoji>{isFilled ? '😃' : '🤔'}</Emoji>
          <Title>
            Como podemos {'\n'}
            chamar você?
          </Title>
          <Input
            placeholder="Digite um nome"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
            isFocused={isFocused || isFilled}
          />

          <Footer>
            <Button text="Confirmar" onPress={handleSubmit} />
          </Footer>
        </Form>
      </Content>
    </Container>
  );
}
