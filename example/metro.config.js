const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

const defaultConfig = getDefaultConfig(__dirname);

const metroConfig = getConfig(getDefaultConfig(__dirname), {
  root,
  pkg,
  project: __dirname,
});

// See https://github.com/storybookjs/react-native

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = withStorybook(metroConfig, {
  // Set to false to remove storybook specific options
  // you can also use a env variable to set this
  enabled: true,
  // Path to your storybook config
  configPath: path.resolve(__dirname, './.storybook'),

  // Optional websockets configuration
  // Starts a websocket server on the specified port and host on metro start
  // websockets: {
  //   port: 7007,
  //   host: 'localhost',
  // },
});
