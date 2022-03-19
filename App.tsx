import React, {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';

import {SignInScreen} from './src/screens/SignInScreen';
import {colors} from './src/colors';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(_user => {
      if (initializing) {
        setInitializing(false);
      }
      setUser(_user);
    });

    return unsubscribe;
  }, [initializing]);

  if (initializing) {
    return (
      <View>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {user ? <HomeScreen /> : <SignInScreen />}
    </SafeAreaView>
  );
};

export default App;
