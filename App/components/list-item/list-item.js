import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../text';
import { Container, ImageContainer, ImageWrapper, Separator } from './styled';

export const ListItem = ({ text, img, onPress, onIconPress }) => (
  <>
    <Container onPress={ () => onPress(text) }>
      <Text>{ text }</Text>
      {
        img &&
        <ImageContainer
          testID={ `${text}_fav_btn` }
          onPress={ () => onIconPress(text) }
        >
          <ImageWrapper
            source={ img }
            resizeMode='contain'
          />
        </ImageContainer>
      }
    </Container>
    <Separator />
  </>
);

ListItem.propTypes = {
  text: PropTypes.string,
  img: PropTypes.node,
  onIconPress: PropTypes.func,
  onPress: PropTypes.func,
};
