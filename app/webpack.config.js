module.exports = {
  resolve: {
    fallback: {
      fs: false, // require.resolve("fs"),
      crypto: false, // require.resolve("crypto-browserify"),
      stream: false, // require.resolve("stream-browserify"),
      os: false, // require.resolve("os-browserify/browser"),
      path: false, // require.resolve("path-browserify"),
    },
  },
  babel: { compact: true },
};
