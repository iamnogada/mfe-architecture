/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		// https://themes.ionevolve.com/
		themes: [
			"light","dark",
		  {
			'zmp': {
			   'primary' : '#9F5FEC',
			   'primary-focus' : '#7E22CE',
			   'primary-content' : '#FFFFFF',
			   
			   'secondary' : '#FF9500',
			   'secondary-focus' : '#FF8C00',
			   'secondary-content' : '#212529',
			   
			   'accent' : '#1B9BFF',
			   'accent-focus' : '#0085FF',
			   'accent-content' : '#FFFFFF',
			   
	
			   'neutral' : '#434C63',
			   'neutral-focus' : '#2A324B',
			   'neutral-content' : '#FFFFFF',
			   
	
			   'base-100' : '#FFFFFF',
			   
	
			   'info' : '#33C1FF',
			   'info-focus' : '#00A3E0',
			   'info-content' : '#FFFFFF',

			   'success' : '#32CD32',
			   'success-focus' : '#228B22',
			   'success-content' : '#FFFFFF',

			   'warning' : '#FFC000',
			   'warning-focus' : '#FFB300',
			   'warning-content' : '#FFFFFF',

			   'error' : '#FF4136',
			   'error-focus' : '#E50000',
			   'error-content' : '#FFFFFF',
	
			  '--rounded-box': '0.3rem',          
			  '--rounded-btn': '.3rem',        
			  '--rounded-badge': '1.9rem',      
	
			  '--animation-btn': '0',       
			  '--animation-input': '0',       
	
			  '--btn-text-case': 'uppercase',   
			  '--navbar-padding': '.5rem',      
			  '--border-btn': '1px',            
			},
		  },
		],
	  },
}
