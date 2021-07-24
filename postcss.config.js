module.exports = (api) => {
  return {
    // You can specify any options from https://postcss.org/api/#processoptions here
    // plugins: ['postcss-preset-env', postcssNormalize()],
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
};
