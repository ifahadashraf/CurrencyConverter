import { connect } from 'react-redux';
import { Currencies } from './currencies';
import { actions } from '../../actions/currencies';

const mapDispatchToProps = {
  setBaseCurrency: actions.setBaseCurrency,
  setQuoteCurrency: actions.setQuoteCurrency,
};

export const CurrenciesContainer = connect(
  null,
  mapDispatchToProps,
)(Currencies);
