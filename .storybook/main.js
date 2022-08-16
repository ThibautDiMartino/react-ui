module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    "../src/stories/Introduction.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-essentials"
  ],
  features: {
    postcss: false,
  },
};