export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    onAction: require('redux-logger').createLogger(),
  },
};
