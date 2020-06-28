import * as types from './types';

export const toggleTheme = data => ({
  type: types.THEME_TOGGLE,
  data,
});

export const setLoginStatus = data => ({
  type: types.LOGIN_SET_STATUS,
  data,
});
