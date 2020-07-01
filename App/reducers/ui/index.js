import * as types from '../../actions/ui/types';
import { Themes } from '../../styles/themes';

const INITIAL_STATE = {
  favorites: [],
  isLoggedIn: false,
  theme: { ...Themes.lightTheme },
};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UI_THEME_TOGGLE:
      return {
        ...state,
        theme:
          state.theme.mode === Themes.lightTheme.mode
            ? { ...Themes.darkTheme }
            : { ...Themes.lightTheme },
      };
    case types.UI_LOGIN_SET_STATUS:
      return {
        ...state,
        isLoggedIn: action.data,
      };
    case types.UI_SET_FAVORITES:
      return {
        ...state,
        favorites: [ ...state.favorites, action.data ],
      };
    default:
      return state;
  }
};
