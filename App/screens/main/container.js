import { connect } from 'react-redux';
import { Main } from './main';
import { selectThemeFromState } from '../../selectors/ui';

const mapStateToProps = state => ({
  theme: selectThemeFromState(state),
});

export const MainContainer = connect(
  mapStateToProps,
  null,
)(Main);
