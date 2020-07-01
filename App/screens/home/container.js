import { connect } from 'react-redux';
import { Home } from './home';
import { actions } from '../../actions/currencies';
import { actions as uiActions } from '../../actions/ui';

import {
  selectBaseCurrencyFromState,
  selectBaseCurrencyValueFromState,
  selectConversionRateFromState,
  selectIsLoadingFromState,
  selectQuoteCurrencyFromState,
  selectQuoteCurrencyValueFromState,
} from '../../selectors/currencies';

const mapStateToProps = state => ({
  baseCurrency: selectBaseCurrencyFromState(state),
  baseCurrencyValue: selectBaseCurrencyValueFromState(state),
  conversionRate: selectConversionRateFromState(state),
  isLoading: selectIsLoadingFromState(state),
  quoteCurrency: selectQuoteCurrencyFromState(state),
  quoteCurrencyValue: selectQuoteCurrencyValueFromState(state),
});

const mapDispatchToProps = {
  fetchConversionRates: actions.fetchConversionRates,
  setBaseCurrencyValue: actions.setBaseCurrencyValue,
  setQuoteCurrencyValue: actions.setQuoteCurrencyValue,
  toggleTheme: uiActions.toggleTheme,
};

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
