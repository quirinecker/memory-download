/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,vue}"
	],
	theme: {
		extend: {
			colors: {
				'windowborder1': '#0C5ECA',
				'windowborder2': '#408BE8'
			},
			backgroundImage: {
				'windowsxp': "url('/public/windowsxp.webp')"
			}
		},
	},
	plugins: [],
}