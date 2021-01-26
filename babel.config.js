module.exports = function(api) {
  api.cache(true);
  const presets = ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
  ];
  return {
    presets,
    plugins,
  };
};
