import React from 'react';
import { Alert } from 'react-native';

export default function MessageAlertComponent(title='Alerta', message='...',action={text:'ok'}) {
    Alert.alert(
      title,
      message,
      [
        { text: 'Cancelar', style: 'cancel' },
        action,
      ],
      { cancelable: true },
    );
  }