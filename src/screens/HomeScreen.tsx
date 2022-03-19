import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import {MyButton} from '../components/MyButton';
import {styles} from './styles';

export function HomeScreen() {
  function signOut() {
    auth().signOut();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <MyButton onPress={signOut} title="Sair" />
      <Text>
        by <Text style={styles.coffText}>Coffstack</Text>
      </Text>
    </View>
  );
}
