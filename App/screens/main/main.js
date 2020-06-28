import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Navigator } from '../../config/navigatior';
import { Container} from './styled';

export const Main = ({ theme }) => (
  <ThemeProvider theme={ theme }>
    <Container>
      <Navigator />
    </Container>
  </ThemeProvider>
);

Main.propTypes = {
  theme: PropTypes.object,
};
