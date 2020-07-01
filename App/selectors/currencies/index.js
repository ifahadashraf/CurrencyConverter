export const selectBaseCurrencyFromState = state => state.currencies.baseCurrency;
export const selectQuoteCurrencyFromState = state => state.currencies.quoteCurrency;
export const selectBaseCurrencyValueFromState = state => state.currencies.baseCurrencyValue;
export const selectQuoteCurrencyValueFromState = state => state.currencies.quoteCurrencyValue;
export const selectIsLoadingFromState = state => state.currencies.isLoading;
export const selectConversionRateFromState = state => {
  const {baseCurrency, quoteCurrency, conversionRates} = state.currencies;
  return (
    baseCurrency &&
    quoteCurrency &&
    conversionRates &&
    conversionRates[quoteCurrency]
  );
};
