import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ListView } from './list-view';
import styled from 'styled-components';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const items = ['Item 1', 'Item 2', 'Item 3'];

storiesOf('List View', module)
  .add('default view', () => (
    <CenteredView>
      <ListView
        data={ items }
        onItemPress={ action('List item pressed') }
      />
    </CenteredView>
  ));
