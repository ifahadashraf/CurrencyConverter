import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Image } from './image';
import styled from 'styled-components';


export const CenteredView = styled.View`
flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

storiesOf('Image', module).add('default view', () => (
  <CenteredView>
    <Image source={ require('../../assets/images/swap.png') }/>
  </CenteredView>
));
