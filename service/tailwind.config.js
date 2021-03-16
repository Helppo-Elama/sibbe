const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const path = require("path");

module.exports = {
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // Change with you want it
                "litepie-primary": colors.lightBlue, // color system for light mode
                "litepie-secondary": colors.coolGray, // color system for dark mode
            },
        },
    },
    variants: {
        extend: {
            cursor: ["disabled"],
            textOpacity: ["disabled"],
            textColor: ["disabled"],
        },
    },

    purge: [
        path.resolve(__dirname, "./node_modules/litepie-datepicker/**/*.js"),
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
