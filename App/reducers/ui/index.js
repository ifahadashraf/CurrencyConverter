import * as types from '../../actions/ui/types';
import { Themes } from '../../styles/themes';

const INITIAL_STATE = {
  isLoggedIn: false,
  theme: {...Themes.lightTheme},
};

export const themesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.THEME_TOGGLE:
      return {
        ...state,
        theme:
          state.theme.mode === Themes.lightTheme.mode
            ? {...Themes.darkTheme}
            : {...Themes.lightTheme},
      };
    case types.LOGIN_SET_STATUS:
      return {
        ...state,
        isLoggedIn: action.data,
      };
    default:
      return state;
  }
};
