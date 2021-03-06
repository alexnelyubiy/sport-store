module.exports = {
  title: "Sport Store",
  icon: "data:image/x-icon;base64,==",
  browserColor: "#3b3b3b",
  inject: true,
  favicon: "./src/media/favicon.png",
  template: "./src/index.ejs",
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
};
