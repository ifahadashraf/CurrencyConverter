import * as types from './types';

export const toggleTheme = data => ({
  type: types.UI_THEME_TOGGLE,
  data,
});

export const setLoginStatus = data => ({
  type: types.UI_LOGIN_SET_STATUS,
  data,
});

export const setFavorites = data => ({
  type: types.UI_SET_FAVORITES,
  data,
});
