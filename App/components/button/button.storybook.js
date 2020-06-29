import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Button } from './button';
import styled from 'styled-components';

export const CenteredView = styled.View`
flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

storiesOf('Button', module).add('default view', () => (
  <CenteredView>
    <Button
      text='Button for storybook'
      onPress={ () => action('Pressed') }
    />
  </CenteredView>
));
