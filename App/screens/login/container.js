import { connect } from 'react-redux';
import { Login } from './login';
import { actions } from '../../actions/ui';
import { selectLoginStatusFromState } from '../../selectors/ui';

const mapStateToProps = state => ({
  isLoggedIn: selectLoginStatusFromState(state),
});

const mapDispatchToProps = {
  setLoginStatus: actions.setLoginStatus,
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
