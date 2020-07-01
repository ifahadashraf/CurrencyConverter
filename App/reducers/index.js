import { combineReducers } from 'redux';
import { currenciesReducer } from './currencies';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
  ui: uiReducer,
});
