const START_APP = /^APP_/;

function getClientEnvironment() {
  const stringified = Object.keys(process.env)
    .filter((key) => START_APP.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {});
  return {
    'process.env': stringified,
  };
}

module.exports = getClientEnvironment;
