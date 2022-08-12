module.exports = {
  "stories": [
    "../src/stories/Introduction.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          additionalData: (content) => {
            return `
              @import "src/scss/_variables.scss";
            ` + content;
          }
        }
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
};