import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/button';
import { Heading } from '../../components/heading';
import { Container, InputWrapper } from './styled';

export const Login = ({ navigation, isLoggedIn, setLoginStatus }) => {
  useEffect(() => {
    isLoggedIn && navigation.navigate('Home');
  }, []);
  return (
    <Container>
      <Heading>Currency Converter App</Heading>
      <InputWrapper placeholder='Username'/>
      <InputWrapper
        placeholder='Password'
        secureTextEntry
      />
      <Button
        text='Login'
        onPress={ () => {
          setTimeout(() => {
            setLoginStatus(true);
            navigation.navigate('Home');
          }, 500);
        } }
      />
    </Container>
  );
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  navigation: PropTypes.object,
  setLoginStatus: PropTypes.func,
};
