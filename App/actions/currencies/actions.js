import * as types from './types';

export const setBaseCurrency = data => ({
  type: types.CURRENCIES_SET_BASE_CURRENCY,
  data,
});

export const setQuoteCurrency = data => ({
  type: types.CURRENCIES_SET_QUOTE_CURRENCY,
  data,
});

export const setBaseCurrencyValue = data => ({
  type: types.CURRENCIES_SET_BASE_CURRENCY_VALUE,
  data,
});

export const setQuoteCurrencyValue = data => ({
  type: types.CURRENCIES_SET_QUOTE_CURRENCY_VALUE,
  data,
});

export const fetchConversionRates = data => ({
  type: types.CURRENCIES_GET_CONVERSION_RATES,
  data,
});

export const toggleIsLoading = () => ({
  type: types.CURRENCIES_TOGGLE_IS_LOADING,
});

export const fetchConversionRatesSuccess = data => ({
  type: types.CURRENCIES_GET_CONVERSION_RATES_SUCCESS,
  data,
});

export const fetchConversionRatesFail = data => ({
  type: types.CURRENCIES_GET_CONVERSION_RATES_FAIL,
  data,
});
