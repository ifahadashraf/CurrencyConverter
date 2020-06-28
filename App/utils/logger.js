const simpleLog = (type, message) => {
  if (!process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.log(`${new Date().toUTCString()}: (${type}) ${message}`);
  }
};

export const logger = {
  info: (message) => simpleLog('INFO', message),
  debug: (message) => simpleLog('DEBUG', message),
  error: (message) => simpleLog('ERROR', message),
};
