module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.handlebars$/i,
      loader: 'handlebars-loader',
      options: {
        inlineRequires: /images/,
      },
    });

    return config;
  },
};
