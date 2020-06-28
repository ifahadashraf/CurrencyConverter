import React from 'react';
import PropTypes from 'prop-types';
import { ListView } from '../../components/list-view';
import { Container} from './styled';
import { OPTIONS } from '../../utils/values';
import {persistData} from '../../utils';

export const Options = ({ navigation }) => (
  <Container>
    <ListView
      data={ OPTIONS }
      onItemPress={ () => {
        persistData('isLoggedIn', '');
        navigation.navigate('Login');
      } }
    />
  </Container>
);

Options.propTypes = {
  navigation: PropTypes.object,
};
