import * as uiActionTypes from '../../actions/currencies/types';

export const INITIAL_STATE = {
  baseCurrency: null,
  baseCurrencyValue: null,
  conversionRates: null,
  error: null,
  isLoading: false,
  quoteCurrency: null,
  quoteCurrencyValue: null,
};

export const currenciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiActionTypes.CURRENCIES_SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.data,
      };
    case uiActionTypes.CURRENCIES_SET_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.data,
      };
    case uiActionTypes.CURRENCIES_SET_BASE_CURRENCY_VALUE:
      return {
        ...state,
        baseCurrencyValue: action.data,
      };
    case uiActionTypes.CURRENCIES_TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case uiActionTypes.CURRENCIES_SET_QUOTE_CURRENCY_VALUE:
      return {
        ...state,
        quoteCurrencyValue: action.data,
      };
    case uiActionTypes.CURRENCIES_GET_CONVERSION_RATES_SUCCESS:
      return {
        ...state,
        conversionRates: action.data.rates,
      };
    case uiActionTypes.CURRENCIES_GET_CONVERSION_RATES_FAIL:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
};
