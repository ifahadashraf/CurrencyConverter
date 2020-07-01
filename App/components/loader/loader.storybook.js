import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Loader } from './loader';
import styled from 'styled-components';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

storiesOf('Loader', module)
  .add('default view', () => (
    <CenteredView>
      <Loader />
    </CenteredView>
  ));
