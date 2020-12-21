import React from 'react';
import PropTypes from 'prop-types';
import { ListView } from '../../components/list-view';
import { Container } from './styled';
import { CURRENCY_TYPES } from '../../utils/values';
import currencies from '../../data/currencies';

export const Currencies = ({
  addToFavorites,
  favorites,
  navigation,
  route: { params = {} },
  setBaseCurrency,
  setQuoteCurrency,
}) => {
  const handleOnItemPress = currency => {
    params.title === CURRENCY_TYPES.BASE
      ? setBaseCurrency(currency)
      : setQuoteCurrency(currency);
    navigation.pop();
  };
  return (
    <Container>
      <ListView
        data={ currencies }
        favorites={ favorites }
        onIconPress={ addToFavorites }
        onItemPress={ handleOnItemPress }
      />
    </Container>
  );
};

Currencies.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  favorites: PropTypes.array,
  addToFavorites: PropTypes.func,
  setBaseCurrency: PropTypes.func,
  setQuoteCurrency: PropTypes.func,
};
