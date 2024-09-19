import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    100: '#e0e9e8',
                    200: '#b3c8c7',
                    300: '#80a3a1',
                    400: '#4d7e7b',
                    500: '#26625f',
                    600: '#004641',
                    700: '#003f3d',
                    800: '#003734',
                    900: '#002f2c',
                    1000: '#00201e',
                },
                secondary: {
                    50: '#e9eaea',
                    100: '#c7caca',
                    200: '#a2a7a7',
                    300: '#7d8483',
                    400: '#616969',
                    500: '#454f4e',
                    600: '#3e4847',
                    700: '#363f3d',
                    800: '#2e3635',
                    900: '#1f2625',
                },
                darkTheme: '#071817',
                grayTheme: 'CAC9c9',
            },
            container: {
                center: true,
                padding: "1.5rem",
                screens: {
                    sm: "600px",
                    md: "728px",
                    lg: "984px",
                    xl: "1240px",
                },
            },
        },
    },
    plugins: [],
};
export default config;
