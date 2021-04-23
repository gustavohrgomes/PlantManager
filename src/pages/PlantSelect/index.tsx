import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { EnviromentButton } from '../../components/EnviromentButton';

import {
  Container,
  HeaderContainer,
  Enviroments,
  EnviromentTextContainer,
  Subtitle,
  Title,
  Plants,
} from './styles';

import { PlantCardPrimary } from '../../components/PlantCardPrimary';

import api from '../../services/api';

interface EnviromentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: String;
  name: String;
  about: String;
  water_tips: String;
  photo: String;
  environments: Array<String>;
  frequency: {
    times: Number;
    repeat_every: String;
  };
}

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);

  useEffect(() => {
    // é usado uma async function, pois o use effect não permite 'async () => {}'
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments');
      setEnviroments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants');
      setPlants(data);
    }

    fetchPlants();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <EnviromentTextContainer>
          <Title>Em qual hambiente</Title>
          <Subtitle>você quer colocar sua planta?</Subtitle>
        </EnviromentTextContainer>
      </HeaderContainer>

      <Enviroments
        data={enviroments}
        renderItem={({ item }) => <EnviromentButton title={item.title} />}
      />

      <Plants
        data={plants}
        renderItem={({ item }) => <PlantCardPrimary data={item} />}
      />
    </Container>
  );
}
