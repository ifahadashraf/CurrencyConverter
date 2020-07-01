import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '../../components/list-item';
import { Container} from './styled';
import { persistData } from '../../utils';

export const Options = ({ navigation }) => (
  <Container>
    <ListItem
      text={ 'Logout' }
      onPress={ () => {
        persistData('isLoggedIn', '');
        navigation.navigate('Login');
      } }
    />
    <ListItem
      text={ 'Storybook' }
      onPress={ () => {
        navigation.navigate('Storybook');
      } }
    />
  </Container>
);

Options.propTypes = {
  navigation: PropTypes.object,
};
