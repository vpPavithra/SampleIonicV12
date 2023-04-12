module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      "@babel/env",
      "@babel/preset-typescript"
    ];
    const plugins = [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/proposal-class-properties", { "loose": true }],
      ["@babel/plugin-proposal-private-methods", { "loose": true }],
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
      "@babel/proposal-object-rest-spread",
    ];
  
    return {
      presets,
      plugins
    };
  };