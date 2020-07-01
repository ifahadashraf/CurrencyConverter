import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Input } from './input';
import styled from 'styled-components';

export const CenteredView = styled.View`
flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

storiesOf('Input', module)
  .add('default view', () => (
    <CenteredView>
      <Input
        placholder='Input field'
      />
    </CenteredView>
  ))
  .add('With button', () => (
    <CenteredView >
      <Input
        btnText='Click me !'
        onBtnPress={ () => action('Input button pressed') }
        placholder='Input field'
      />
    </CenteredView>
  ));
