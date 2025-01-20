/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "var(--font-lato)",
		},
		extend: {
			colors: {
				primary: "#FFFFFF", // White
				secondary: "#A57E53", // Camel
				writing: "#000000", // Black
				accent: {
					DEFAULT: "#3B7644", // Fern Green
					hover: "#E2CBAC", // Sand
					alternative: "#FFBA43", // Saffron
				},
				background: {
					DEFAULT: "#FFFFFF", // White
					light: "#EEEEEC", // Alabaster
					highlight: "#E2CBAC", // Sand
				},
			},
			borderRadius: {
				sm: "4px",
				md: "8px",
				lg: "12px",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
