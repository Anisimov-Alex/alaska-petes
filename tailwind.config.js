/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            drukCondTrial: ['Druk Cond Trial', 'sans-serif'],
            drukTextTrial: ['Druk Text Trial', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#3E404B',
                darkRed: '#933333',
                bg: '#E9E1D4',
            },
        },
    },
    plugins: [],
};
