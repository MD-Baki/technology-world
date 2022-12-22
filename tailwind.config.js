/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    daisyui: {
        themes: [
            {
                techTheme: {
                    primary: "#2e5c83",
                    secondary: "#fff",
                    accent: "#fff",
                    neutral: "#fff",
                    "base-100": "#FFF",
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
