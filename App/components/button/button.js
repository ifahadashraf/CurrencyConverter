import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonText } from './styled';

export const Button = ({ text, onPress }) => (
  <ButtonContainer onPress={ onPress }>
    <ButtonText>{ text }</ButtonText>
  </ButtonContainer>
);


Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};
