import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button } from '../../../../App/components/button';
import { CenteredView } from './styled';

storiesOf('Button', module).add('default view', () => (
  <CenteredView>
    <Button
      text='Button for storybook'
      onPress={ () => alert('Pressed') }
    />
  </CenteredView>
));
