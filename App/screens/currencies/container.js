import { connect } from 'react-redux';
import { Currencies } from './currencies';
import { actions } from '../../actions/currencies';
import { actions as uiActions } from '../../actions/ui';
import { selectFavoritesFromState } from '../../selectors/ui';

const mapStateToProps = state => ({
  favorites: selectFavoritesFromState(state),
});

const mapDispatchToProps = {
  setBaseCurrency: actions.setBaseCurrency,
  setQuoteCurrency: actions.setQuoteCurrency,
  addToFavorites: uiActions.setFavorites,
};

export const CurrenciesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Currencies);
