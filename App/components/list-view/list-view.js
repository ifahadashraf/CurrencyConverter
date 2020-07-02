import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { ListItem } from '../list-item';

export const ListView = React.memo(({ data, favorites, onItemPress, onIconPress }) => {
  const renderItem = ({ item }) => (
    <ListItem
      text={ item }
      onPress={ onItemPress }
      onIconPress={ onIconPress }
      img={
        favorites && favorites.find(fav => item === fav)
          ? require('../../assets/images/001-heart.png')
          : require('../../assets/images/002-heart-1.png')
      }
    />
  );
  return (
    <FlatList
      data={ data }
      renderItem={ renderItem }
      keyExtractor={ item => item }
    />
  );
});

ListView.propTypes = {
  data: PropTypes.array.isRequired,
  favorites: PropTypes.array,
  onIconPress: PropTypes.func,
  onItemPress: PropTypes.func,
};
