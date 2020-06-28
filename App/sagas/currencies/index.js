import { takeLatest } from 'redux-saga/effects';
import { fetchConversionRatesSaga } from './fetch-conversion-rates';
import { types } from '../../actions/currencies';

export function* currenciesSaga() {
  yield takeLatest(
    types.CURRENCIES_GET_CONVERSION_RATES,
    fetchConversionRatesSaga,
  );
}
