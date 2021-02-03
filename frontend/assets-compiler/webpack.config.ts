import { FaviconWebpackPlugionOptions } from "favicons-webpack-plugin/src/options";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const faviconOptions: FaviconWebpackPlugionOptions = {
  logo: "../src/assets/img/villa-sibbe.png",
  outputPath: "../../dist/img/favicons",
  publicPath: "./",
  prefix: "",
  inject: false,
  favicons: {
    lang: "fi_FI",
    appName: "Villa Sibbe",
    appDescription: "Majoitu, kokousta ja viihdy tammipuiden suojassa.",
    developerName: "Helppo Elämä",
    developerURL: "https://helppoelama.net",
    background: "#000",
    theme_color: "#fff",
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: true,
      favicons: true,
      firefox: true,
      windows: true,
      yandex: true,
    },
  },
};

module.exports = {
  mode: "production",
  plugins: [
    new FaviconsWebpackPlugin({
      ...faviconOptions,
    }),
  ],
};
