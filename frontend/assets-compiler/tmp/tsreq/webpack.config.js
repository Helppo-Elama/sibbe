"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
var FaviconsWebpackPlugin = require("favicons-webpack-plugin");
var faviconOptions = {
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
        background: "transparent",
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
        new FaviconsWebpackPlugin(__assign({}, faviconOptions)),
    ],
};
