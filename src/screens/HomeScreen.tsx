import React from 'react';
import {View, Text} from 'react-native';

import {MyButton} from '../components/MyButton';
import {styles} from './styles';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <MyButton title="Sair" />
      <Text>
        by <Text style={styles.coffText}>Coffstack</Text>
      </Text>
    </View>
  );
}
