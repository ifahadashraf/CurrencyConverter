import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store';
import { Main } from './screens/main';

const App: () => React$Node = () => (
  <Provider store={ store }>
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  </Provider>
);

export default App;
