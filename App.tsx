import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';

import {SignInScreen} from './src/screens/SignInScreen';

const App = () => {
  const user = false;
  return (
    <SafeAreaView style={{flex: 1}}>
      {user ? <HomeScreen /> : <SignInScreen />}
    </SafeAreaView>
  );
};

export default App;
