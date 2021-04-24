import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import { Button } from '../../components/Button';

import {
  Container,
  PlantInfo,
  PlantImage,
  PlantName,
  PlantAbout,
  PlantControllers,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  DateTimePickerButton,
  DateTimePickerText,
} from './styles';

import waterdrop from '../../assets/waterdrop.png';

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: Array<String>;
    frequency: {
      times: number;
      repeat_every: string;
    };
  };
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(
    Platform.OS == 'ios',
  );

  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeDateTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS == 'android') {
      setShowDateTimePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma data futura ⏰');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenAndroidDateTimePicker() {
    setShowDateTimePicker(oldState => !oldState);
  }

  return (
    <Container>
      <PlantInfo>
        <PlantImage uri={plant.photo} width={150} height={150} />
        <PlantName>{plant.name}</PlantName>
        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>

      <PlantControllers>
        <TipContainer>
          <TipImage source={waterdrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

        {showDateTimePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="default"
            onChange={handleChangeDateTime}
          />
        )}

        {Platform.OS == 'android' && (
          <DateTimePickerButton onPress={handleOpenAndroidDateTimePicker}>
            <DateTimePickerText>
              {format(selectedDateTime, 'HH:mm')}
            </DateTimePickerText>
          </DateTimePickerButton>
        )}

        <Button text="Cadastrar Planta" />
      </PlantControllers>
    </Container>
  );
}
