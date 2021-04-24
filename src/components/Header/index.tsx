import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Greeting, UserImage, UserName } from './styles';

import profile from '../../../assets/profile.jpeg';

export function Header() {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    async function getUserName() {
      const name = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(name || '');
    }

    getUserName();
  }, [userName]);

  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </View>

      <UserImage source={profile} />
    </Container>
  );
}
