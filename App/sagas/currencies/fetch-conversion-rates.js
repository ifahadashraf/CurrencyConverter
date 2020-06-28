import { call, put } from 'redux-saga/effects';
import { fetchConversionRatesAPI } from '../../api/currencies';
import { actions } from '../../actions/currencies';

export function* fetchConversionRatesSaga({data}) {
  yield put(actions.toggleIsLoading());
  try {
    const resp = yield call(fetchConversionRatesAPI, data);
    yield put(actions.fetchConversionRatesSuccess(resp));
  } catch (error) {
    yield put(actions.fetchConversionRatesFail(error));
  }
  yield put(actions.toggleIsLoading());
}
