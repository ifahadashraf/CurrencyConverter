import { fork } from 'redux-saga/effects';
import { currenciesSaga } from './currencies';

export function* rootSaga() {
  yield fork(currenciesSaga);
}
