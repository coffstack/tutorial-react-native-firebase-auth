import React, {useState} from 'react';
import {View, Image} from 'react-native';
import auth from '@react-native-firebase/auth';

import {styles} from './styles';

import logo from '../assets/logo.png';
import {MyButton} from '../components/MyButton';
import {MyTextInput} from '../components/MyTextInput';
import {MyLink} from '../components/MyLink';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

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

      <MyLink title="Cadastrar" onPress={signUp} />
    </View>
  );
}
