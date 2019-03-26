module.exports = function(api) {
    api.cache(true);
    const presets = [
        ['@babel/env', {'modules': false, 'targets': {'node': 'current'}}],
        '@babel/preset-typescript',
        '@babel/preset-react'
    ]
    const plugins = [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-modules-commonjs"
    ]
    return {
        presets,
        plugins
    };
}