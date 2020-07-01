import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Heading } from './heading';
import styled from 'styled-components';

export const CenteredView = styled.View`
flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

storiesOf('Heading', module).add('default view', () => (
  <CenteredView>
    <Heading>This is a heading</Heading>
  </CenteredView>
));
