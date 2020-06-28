import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { ListItem } from '../list-item';

export const ListView = ({ data, onItemPress }) => (
  <FlatList
    data={ data }
    renderItem={ ({item}) => (<ListItem
      text={ item }
      onPress={ onItemPress }
    />) }
    keyExtractor={ item => item }
  />
);

ListView.propTypes = {
  data: PropTypes.array.isRequired,
  onItemPress: PropTypes.func,
};
