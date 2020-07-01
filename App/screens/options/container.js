import { connect } from 'react-redux';
import { Options } from './options';
import { actions } from '../../actions/ui';

const mapDispatchToProps = {
  setLoginStatus: actions.setLoginStatus,
};

export const OptionsContainer = connect(
  null,
  mapDispatchToProps,
)(Options);
