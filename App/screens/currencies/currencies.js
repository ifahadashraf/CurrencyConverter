import React from 'react';
import PropTypes from 'prop-types';
import { ListView } from '../../components/list-view';
import { Container } from './styled';
import { CURRENCY_TYPES } from '../../utils/values';
import currencies from '../../data/currencies';

export const Currencies = ({
  navigation,
  route: { params = {} },
  setBaseCurrency,
  setQuoteCurrency,
}) => {
  return (
    <Container>
      <ListView
        data={ currencies }
        onItemPress={ currency => {
          params.title === CURRENCY_TYPES.BASE
            ? setBaseCurrency(currency)
            : setQuoteCurrency(currency);
          navigation.pop();
        } }
      />
    </Container>
  );
};

Currencies.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  setBaseCurrency: PropTypes.func,
  setQuoteCurrency: PropTypes.func,
};
