import React, { useState } from 'react';
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

  return (
    <Container>
      <Content>
        <Form>
          <Emoji>{isFilled ? '😄' : '🤔'}</Emoji>
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
            <Button text="Confirmar" />
          </Footer>
        </Form>
      </Content>
    </Container>
  );
}
