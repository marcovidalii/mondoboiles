/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0d2752",
                    secondary: "#ff0000",
                    accent: "#FF0000",
                    neutral: "#FF0000",
                    "base-100": "#ffffff",
                    info: "#FF0000",
                    success: "#FF0000",
                    warning: "#FF0000",
                    error: "#FF0000",
                },
            },
        ],
    },

    theme: {
        extend: {
            fontFamily: {
                "gilroy-heavy": ["Gilroy-Heavy"],
                "gilroy-bold": ["Gilroy-Bold"],
            },
        },
    },
    plugins: [require("daisyui")],
};
