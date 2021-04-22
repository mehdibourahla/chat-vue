module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://messenger-system.herokuapp.com",
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
};
