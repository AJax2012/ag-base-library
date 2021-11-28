module.exports = {
  stories: [
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.js",
    "../pages/**/*.stories.tsx",
    "../pages/**/*.stories.ts",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
};
