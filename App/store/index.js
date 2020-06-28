import { createStore, applyMiddleware, compose } from 'redux';
import sagaMiddlewareFactory from 'redux-saga';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = sagaMiddlewareFactory();
const middlewares = [ sagaMiddleware ];
const appliedMiddlewares = [ applyMiddleware(...middlewares) ];

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composedEnhancers(...appliedMiddlewares);

export const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);
