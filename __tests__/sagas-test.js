import { expectSaga } from 'redux-saga-test-plan';
import { fetchConversionRatesSaga } from '../App/sagas/currencies/fetch-conversion-rates';
import { actions } from '../App/actions/currencies';
import {
  currenciesReducer,
  INITIAL_STATE,
} from '../App/reducers/currencies';

it('Sagas and redux store state', () => {
  return expectSaga(fetchConversionRatesSaga, actions.fetchConversionRates('AUD'))
    .withReducer(currenciesReducer)
    .hasFinalState({
      ...INITIAL_STATE,
      conversionRates: {
        CAD: 0.9439281098,
        HKD: 5.3792084693,
        ISK: 97.864221087,
        PHP: 34.3411091278,
        DKK: 4.5844155844,
        HUF: 217.7017295501,
        CZK: 16.4282636794,
        GBP: 0.5513017788,
        RON: 2.9807349049,
        SEK: 6.3999507601,
        IDR: 10018.4095525328,
        INR: 52.2194866745,
        BRL: 3.7355204038,
        RUB: 49.3693604973,
        HRK: 4.6374715332,
        JPY: 74.1552286576,
        THB: 21.7369360497,
        CHF: 0.6539668862,
        EUR: 0.6154982458,
        MYR: 2.9611005109,
        BGN: 1.2037914692,
        TRY: 4.7650027697,
        CNY: 4.8594817505,
        NOK: 6.5958638518,
        NZD: 1.0579799348,
        ZAR: 11.7491844648,
        USD: 0.694035822,
        MXN: 15.8154120761,
        SGD: 0.9665168954,
        AUD: 1.0,
        ILS: 2.4008124577,
        KRW: 833.8154736259,
        PLN: 2.7539238013,
      },
    })
    .run();
});
