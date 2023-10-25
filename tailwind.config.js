/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite/**/*.js",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				hylia: ["hylia-serif", "serif"],
			},
		},
		letterSpacing: {
			logo: "-.035em",
		},
	},
	plugins: [require("flowbite/plugin")],
};
