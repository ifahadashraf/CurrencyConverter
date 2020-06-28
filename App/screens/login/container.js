import { connect } from 'react-redux';
import { Login } from './login';
import { actions } from '../../actions/ui';

const mapDispatchToProps = {
  setLoginStatus: actions.setLoginStatus,
};

export const LoginContainer = connect(
  null,
  mapDispatchToProps,
)(Login);
