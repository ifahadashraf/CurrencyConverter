import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
import { Container, InputWrapper } from './styled';

export const Input = ({ btnText, onBtnPress, btnTestID, ...props}) => (
  <Container>
    { btnText && <Button
      testID={ btnTestID }
      text={ btnText }
      onPress={ onBtnPress }/> }
    <InputWrapper { ...props } />
  </Container>
);

Input.propTypes = {
  btnTestID: PropTypes.string,
  btnText: PropTypes.string,
  onBtnPress: PropTypes.func,
};
