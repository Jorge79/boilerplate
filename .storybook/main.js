module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  core: {
    builder: 'webpack5'
  }
}
