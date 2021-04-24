import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnviromentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Load } from '../../components/Load';

import { PlantProps } from '../../libs/storage';

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

interface EnvironmentProps {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environments, setenvironments] = useState<EnvironmentProps[]>([]);
  const [environmentSelected, setenvironmentSelected] = useState('all');
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefresing] = useState(false);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

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
    loadPlants();
  }, []);

  async function loadPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );

    if (!data) {
      return setLoading(true);
    }

    setPlants(oldPlants => (page > 1 ? [...oldPlants, ...data] : data));
    setFilteredPlants(oldPlants => (page > 1 ? [...oldPlants, ...data] : data));

    setLoading(false);
    setLoadingMore(false);
    setRefresing(false);
  }

  function handleEnvironmentSelected(environment: string) {
    setenvironmentSelected(environment);

    if (environment == 'all') return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment),
    );

    setFilteredPlants(filtered);
  }

  function loadMorePlants(distance: number) {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldPage => oldPage + 1);
    loadPlants();
  }

  // TODO: Verificar o porquê quando quando não há mais dados para buscar na api,
  // o número da paginação continua aumentando mesmo não havendo mais dados a buscar
  // levando a um bug que quando damos um refresh na lista de plantas, ela fica em branco
  // pois o numero da página não contem mais nenhum dado.
  // SOLUTION: Resetar o número da paginação ao dar um refresh na lista
  function refreshPlants() {
    setRefresing(true);
    setPlants([]);
    setFilteredPlants([]);
    loadPlants();
  }

  function handleNavigatePlantSave(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant });
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

      {/*
        Nos atributos dos componentes Environments e Plants abaixo,
        estou tipando os items como 'any', pois há alguma
        imcompatibilidade com a tipagem do styled components.

        Se eu utilizar uma FlatList pura, o typescript consegue
        fazer a inferência de tipos normalmente.

        Caso o item fique sem tipagem, o mesmo será tipado como 'unknown'
        e o compiler irá reclamar
      */}
      <Environments
        data={environments}
        keyExtractor={(item: any) => String(item.key)}
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
          keyExtractor={(item: any) => String(item.id)}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            loadMorePlants(distanceFromEnd)
          }
          onRefresh={refreshPlants}
          refreshing={refreshing}
          renderItem={({ item }: any) => (
            <PlantCardPrimary
              name={item.name}
              photo={item.photo}
              onPress={() => handleNavigatePlantSave(item)}
            />
          )}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </PlantsContainer>
    </Container>
  );
}
