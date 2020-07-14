import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ImageWrapper } from './styled';

export const ImageButton = ({ img, onPress, testID }) => (
  <ButtonContainer
    testID={ testID }
    onPress={ onPress }
  >
    <ImageWrapper source={ img } />
  </ButtonContainer>
);

ImageButton.propTypes = {
  img: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};
