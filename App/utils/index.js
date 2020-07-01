import { AsyncStorage } from 'react-native';
import {logger} from './logger';

export const persistData = (key, value) => {
  try {
    AsyncStorage.setItem(key, value)
      .catch(err => { throw err; });
  } catch (e) {
    logger.error(e);
  }
};

export const getPersistedData = key => {
  return AsyncStorage.getItem(key)
};
