import { combineReducers } from 'redux';
import { currenciesReducer } from './currencies';
import { themesReducer } from './ui';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
  ui: themesReducer,
});
