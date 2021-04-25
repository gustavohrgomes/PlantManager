import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { loadPlant, PlantProps, removePlant } from '../../libs/storage';

import {
  Container,
  Plants,
  PlantsTitle,
  PlantsToWater,
  Spotlight,
  SpotlightImage,
  SpotlightText,
} from './styles';

import waterdrop from '../../assets/waterdrop.png';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWater, setNextWater] = useState<string>();

  useEffect(() => {
    async function loadStoragePlants() {
      const storagePlants = await loadPlant();

      const nextTime = formatDistance(
        new Date(storagePlants[0].dataTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR },
      );

      setNextWater(
        `Não esqueça de regar a ${storagePlants[0].name} às ${nextTime}`,
      );
      setMyPlants(storagePlants);
      setLoading(false);
    }

    loadStoragePlants();
  }, []);

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏',
        style: 'cancel',
      },
      {
        text: 'Sim 😪',
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants(oldData =>
              oldData.filter(item => item.id !== plant.id),
            );
          } catch (error) {
            Alert.alert('Não foi possível remover a planta! 😅');
          }
        },
      },
    ]);
  }

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterdrop} />
        <SpotlightText>{nextWater}</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>Próximas Regadas</PlantsTitle>
        <PlantsToWater
          data={myPlants}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => (
            <PlantCardSecondary
              name={item.name}
              photo={item.photo}
              hour={item.hour}
              handleRemove={() => {
                handleRemove(item);
              }}
            />
          )}
        />
      </Plants>
    </Container>
  );
}
