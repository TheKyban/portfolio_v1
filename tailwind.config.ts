import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#131424",
                secondary: "#393A47",
                accent: "#F13024",
            },
            animation: {
                "spin-slow": "spin 6s linear infinite",
            },
            fontFamily: {
                poppins: [`var(--font-poppins)`, "sans-serif"],
                sora: [`var(--font-sora)`, "sans-serif"],
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    translateZ: (value) => ({
                        "--tw-translateZ": value,
                        transform: `translateZ(--tw-translateZ)`,
                    }),
                },
                {
                    values: theme("translate"),
                    supportsNegativeValues: true,
                }
            );
        }),
    ],
};
export default config;
