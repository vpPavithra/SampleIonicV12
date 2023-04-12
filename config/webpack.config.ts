module.exports = {
  entry: ["@babel/polyfill"],
  module: {
    rules: [
      {
        test: /.[jt]sx?$/,
        use: ['babel-loader'],
        // options: {
        //   "presets": [
        //     ['es2015', {modules: false}]
        //   ],
        // },
      },
    ],
  },
}