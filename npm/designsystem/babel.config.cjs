module.exports = function (api) {
  api.cache(true);
  const presets = ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'];
  return {
    presets,
  };
};
