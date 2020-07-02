import { createSelector } from 'reselect';

export const selectBaseCurrencyFromState = state => state.currencies.baseCurrency;
export const selectQuoteCurrencyFromState = state => state.currencies.quoteCurrency;
export const selectBaseCurrencyValueFromState = state => state.currencies.baseCurrencyValue;
export const selectQuoteCurrencyValueFromState = state => state.currencies.quoteCurrencyValue;
export const selectIsLoadingFromState = state => state.currencies.isLoading;
export const selectConversionRatesFromState = state => state.currencies.conversionRates;
export const selectConversionRateFromState = createSelector(
  [
    selectBaseCurrencyFromState,
    selectQuoteCurrencyFromState,
    selectConversionRatesFromState,
  ],
  (baseCurrency, quoteCurrency, conversionRates) => (
    baseCurrency &&
    quoteCurrency &&
    conversionRates &&
    conversionRates[quoteCurrency]
  ));
