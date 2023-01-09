/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Fraunces: ["Fraunces", "serif"],
				Montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				DarkCyan: "#3c8067",
				Cream: "#f2ebe3",
				VeryDarkBlue: "#1c232b",
				DarkGrayishBlue: "#6c7289",
			},
		},
	},
	plugins: [],
};
