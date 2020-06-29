import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ImageButton } from './image-button';
import styled from 'styled-components';

export const CenteredView = styled.View`
flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

storiesOf('Image Button', module).add('default view', () => (
  <CenteredView>
    <ImageButton
      img={ require('../../assets/images/swap.png') }
      onPress={ () => action('Pressed') }
    />
  </CenteredView>
));
