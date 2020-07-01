import React from 'react';
import PropTypes from 'prop-types';
import { ImageWrapper } from './styled';

export const Image = props => (
  <ImageWrapper
    { ...props }
    resizeMode='contain'
  />
);
