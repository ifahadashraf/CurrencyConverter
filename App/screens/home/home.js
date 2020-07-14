import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../components/heading';
import { ImageButton } from '../../components/image-button';
import { Loader } from '../../components/loader';
import logo from '../../assets/images/swap.png';
import { Container, Header, ImageWrapper, InputWrapper} from './styled';

export const Home = ({
  baseCurrency,
  baseCurrencyValue,
  conversionRate,
  fetchConversionRates,
  navigation,
  quoteCurrency,
  quoteCurrencyValue,
  setQuoteCurrencyValue,
  isLoading,
  setBaseCurrencyValue,
  toggleTheme,
}) => {
  useEffect(() => {
    baseCurrency && fetchConversionRates(baseCurrency);
  }, [baseCurrency, fetchConversionRates]);
  useEffect(() => {
    setQuoteCurrencyValue((baseCurrencyValue * conversionRate).toString());
  }, [baseCurrencyValue, conversionRate, setQuoteCurrencyValue]);
  return (
    <>
      { isLoading && <Loader /> }
      <Header>
        <ImageButton
          testID='toggleThemeBtn'
          img={ require('../../assets/images/theme.png') }
          onPress={ () => toggleTheme() }
        />
        <ImageButton
          testID='optionsBtn'
          img={ require('../../assets/images/settings.png') }
          onPress={ () => navigation.push('Options') }
        />
      </Header>
      <Container>
        <Heading>Currency Converter</Heading>
        <ImageWrapper source={ logo } />
        <InputWrapper
          testID='fromText'
          btnTestID='baseCurrencyBtn'
          btnText={ baseCurrency || 'From' }
          placeholder='Base currency'
          onChangeText={ text => {
            setBaseCurrencyValue(text);
            setQuoteCurrencyValue((text * conversionRate).toString());
          } }
          onBtnPress={ () =>
            navigation.push('Currencies', {
              title: 'Base Currency',
              activeCurrency: baseCurrency,
            })
          }
        />
        <InputWrapper
          testID='toText'
          btnTestID='quoteCurrencyBtn'
          btnText={ quoteCurrency || 'To' }
          editable={ false }
          placeholder='Target currency'
          value={ quoteCurrencyValue }
          onBtnPress={ () =>
            navigation.push('Currencies', {
              title: 'Quote Currency',
              activeCurrency: quoteCurrency,
            })
          }
        />
      </Container>
    </>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool,
  conversionRate: PropTypes.number,
  baseCurrency: PropTypes.string,
  baseCurrencyValue: PropTypes.string,
  quoteCurrency: PropTypes.string,
  quoteCurrencyValue: PropTypes.string,
  navigation: PropTypes.object,
  fetchConversionRates: PropTypes.func,
  setBaseCurrencyValue: PropTypes.func,
  setQuoteCurrencyValue: PropTypes.func,
  toggleTheme: PropTypes.func,
};
