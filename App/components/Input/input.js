import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
import { Container, InputWrapper } from './styled';

export const Input = ({ btnText, onBtnPress, ...props}) => (
  <Container>
    { btnText && <Button
      text={ btnText }
      onPress={ onBtnPress }/> }
    <InputWrapper { ...props } />
  </Container>
);

Input.propTypes = {
  btnText: PropTypes.string,
  onBtnPress: PropTypes.func,
};
