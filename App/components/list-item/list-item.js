import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../text';
import { Container, ImageWrapper, Separator } from './styled';

export const ListItem = ({ text, img, onPress }) => (
  <>
    <Container onPress={ () => onPress(text) }>
      <Text>{ text }</Text>
      {
        img &&
        <ImageWrapper
          source={ img }
          resizeMode='contain'
        />
      }
    </Container>
    <Separator />
  </>
);

ListItem.propTypes = {
  text: PropTypes.string,
  img: PropTypes.node,
  onPress: PropTypes.func,
};
