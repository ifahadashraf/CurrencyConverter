import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import sagaMiddlewareFactory from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = sagaMiddlewareFactory();
const middleware = [ sagaMiddleware ];
const appliedMiddleware = [ applyMiddleware(...middleware) ];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'ui',
  ],
};

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composedEnhancers(...appliedMiddleware);

export const store = createStore(persistReducer(persistConfig, rootReducer), enhancers);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
