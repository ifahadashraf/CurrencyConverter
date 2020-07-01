import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Main } from './screens/main';

const App: () => React$Node = () => (
  <Provider store={ store }>
    <PersistGate
      loading={ null }
      persistor={ persistor }
    >
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
