import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnviromentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Load } from '../../components/Load';

import {
  Container,
  HeaderContainer,
  Environments,
  EnvironmentTextContainer,
  Subtitle,
  Title,
  PlantsContainer,
  Plants,
} from './styles';

import colors from '../../styles/colors';

import api from '../../services/api';

interface environmentProps {
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
  const [environments, setenvironments] = useState<environmentProps[]>([]);
  const [environmentSelected, setenvironmentSelected] = useState('all');
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  useEffect(() => {
    // é usado uma async function, pois o use effect não permite 'async () => {}'
    async function fetchenvironment() {
      const { data } = await api.get(
        'plants_environments?_sort=title&_order=asc',
      );
      setenvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchenvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  function handleEnvironmentSelected(environment: string) {
    setenvironmentSelected(environment);

    if (environment == 'all') return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment),
    );

    setFilteredPlants(filtered);
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=6`,
    );

    if (!data) {
      return setLoading(true);
    }

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <EnvironmentTextContainer>
          <Title>Em qual hambiente</Title>
          <Subtitle>você quer colocar sua planta?</Subtitle>
        </EnvironmentTextContainer>
      </HeaderContainer>

      <Environments
        data={environments}
        renderItem={({ item }: any) => (
          <EnvironmentButton
            title={item.title}
            active={item.key === environmentSelected}
            onPress={() => handleEnvironmentSelected(item.key)}
          />
        )}
      />

      <PlantsContainer>
        <Plants
          data={filteredPlants}
          renderItem={({ item }: any) => (
            <PlantCardPrimary name={item.name} photo={item.photo} />
          )}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </PlantsContainer>
    </Container>
  );
}
