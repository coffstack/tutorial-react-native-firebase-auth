import React, {useState} from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';

import logo from '../assets/logo.png';
import {MyButton} from '../components/MyButton';
import {MyTextInput} from '../components/MyTextInput';
import {MyLink} from '../components/MyLink';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <Image resizeMode="contain" source={logo} style={{width: 200}} />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyButton title="Entrar no App" />

      <MyLink>Cadastrar</MyLink>
    </View>
  );
}
