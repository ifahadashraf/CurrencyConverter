import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonText } from './styled';

export const Button = ({ text, onPress, testID }) => (
  <ButtonContainer
    testID={ testID }
    onPress={ onPress }
  >
    <ButtonText>{ text }</ButtonText>
  </ButtonContainer>
);


Button.propTypes = {
  testID: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
};
