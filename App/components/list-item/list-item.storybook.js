import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import {ListItem} from './list-item';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

storiesOf('List Item', module)
  .add('default view', () => (
    <CenteredView>
      <ListItem
        text='List item'
        onPress={ () => action('List item pressed') }
      />
    </CenteredView>
  ))
  .add('With Image', () => (
    <CenteredView >
      <ListItem
        text='List item'
        onPress={ () => action('List item pressed') }
        img={ require('../../assets/images/settings.png') }
      />
    </CenteredView>
  ));
