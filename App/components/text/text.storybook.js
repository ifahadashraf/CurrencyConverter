import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from './text';
import styled from 'styled-components';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

storiesOf('Text', module)
  .add('default view', () => (
    <CenteredView>
      <Text>Hello World !</Text>
    </CenteredView>
  ));
