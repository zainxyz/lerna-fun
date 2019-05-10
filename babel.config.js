// let presets = [];
//
// // Define some aliases for Babel to keep in mind when importing modules.
// const defaultAliases = {
//     '@fun/core': './packages/core/src',
//     '@fun/components': './packages/components/src',
//     '@fun/app': './packages/app/src'
// };
//
// function configureBabel(api = {}) {
//     // Turn off Cache.
//     // @see {@link https://stackoverflow.com/a/51037631}
//     // @see {@link https://babeljs.io/docs/en/config-files#apicache}
//     api.cache && api.cache.never();
//     // Extract some environment variables.
//     const NODE_ENV = getProcessEnv('NODE_ENV');
//     const BABEL_ENV = getProcessEnv('BABEL_ENV');
//     // Resove some ENV vars.
//     const isBabelEnvEs = BABEL_ENV === 'esm';
//     const isBabelEnvCjs = BABEL_ENV === 'cjs';
//     const isEnvDev = NODE_ENV === 'development';
//     const isEnvProd = NODE_ENV === 'production';
//     // Define a set of prod plugins.
//     const prodPlugins = [];
//     // Define the set of plugins.
//     const plugins = ['babel-plugin-styled-components'];
//     // Define the set of presets.
//     const presets = [
//         [
//             '@babel/preset-react',
//             {
//                 development: isEnvDev,
//                 useBuiltIns: true
//             }
//         ]
//     ].filter(Boolean);
//     // Define the babel environments.
//     const env = {
//         cjs: {
//             plugins: prodPlugins
//         },
//         development: [
//             [
//                 'babel-plugin-module-resolver',
//                 {
//                     alias: {
//                         ...defaultAliases
//                     },
//                     transformFunctions: ['require', 'require.context']
//                 }
//             ]
//         ]
//     };
//     // Return the config.
//     return {
//         plugins,
//         presets,
//         env
//     };
// }

module.exports = {
    plugins: ['babel-plugin-styled-components'],
    presets: ['@babel/preset-env', '@babel/preset-react']
};
