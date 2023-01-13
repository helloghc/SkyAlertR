const PALLETTE_COLORS_US = {
	NAME: 'LIGHT',
	primary: '#CC0000',
	darkPrimary: '#A20202',
	ligthPrimary: '#FFCCBC',
	primaryText: '#FFFFFF',
  	background: '#e8e8e8',
	text: '#212121',
	secondaryText: '#757575',
	divider: '#BDBDBD',
	containerMain: '#2A2A2A',
	preloader:{
		brand_fill: 'rgba(204, 0, 0, 0.1)',
		brand_stroke: 'rgba(204, 0, 0, 1)',
		shadow: 'rgba(22, 22 ,22 ,0.15)',
		animations:{
			bg:{
				from: 'rgba(255, 255, 255, 0)',
				to: 'rgba(255, 255, 255, 1)',
			},
			pulse:{
				porcent_0 : [
					'rgba(204, 0, 0, 0.15)',
					'rgba(255, 255, 255, 0)',
				],
				porcent_25 : [
					'rgba(255, 255, 255, 0)',
					'rgba(204, 0, 0, 0.25)',
				],
				porcent_50 : [
					'rgba(255, 255, 255, 0)',
					'rgba(204, 0, 0, 0.15)',
				],
				porcent_100 : [
					'rgba(204, 0, 0, 0.15)',
					'rgba(255, 255, 255, 0)',
				],
			},
			filling:{
				porcent_0 : 'rgba(204, 0, 0, 0.3)',
				porcent_25: 'rgba(204, 0, 0, 0.5)',
				porcent_95: 'rgba(204, 0, 0, 0.75)',
				porcent_100: {
					fill: 'rgba(204,0, 0, 1)',
					stroke: 'rgba(255, 255, 255, 1)',
				},
			},
		},
	},	
	brand:{
		bg: '#CC0000',
		letter: '#FFFFFF',
	},
	header:{
		bg: '#FFFFFF',
		letter: '#3D3D3C',
		isotype: '#CC0000',
	},
	navbar:{
		bg:{
			primary: '#F7F7F7',
			secondary: '#F7F7F7',
			link: '#b3b3b3',
		},
		shadow: 'rgba(0,0,0,0.16)',
		text: '#000000',
		children:{
			bg: '#FFFFFF',
			link:{
				text: '#212121',
				hoverText: '#CC0000',
				hoverBg : 'rgba(204,0,0,0.05)',
				border: '#CC0000',
			},
			shadow:{
				first: 'rgba(0,0,0,0.19)',
				second: 'rgba(0,0,0,0.23)',
			},
		},
	},
	sidebar:{
		header:{
			bg: 'rgba(255, 255, 255, 0.68)',
			border: 'rgba(204,0,0,0.85)'
		},
		switcher:{
			label: '#FFFFFF',
			bg: '#9E9E9E',
			circle: '#FAFAFA',
			active: '#FAFAFA35',
		},
		bodyBorder: '#A20202',
		text: '#FFFFFF',
		item: 'rgba(0, 0, 0, 0.20)',
	},
	feed:{
		title: '#000000',
	},
	articleCard:{
		bg: '#FAFAFA',
		title: '#000000',
		summary: '#B9B9B9',
		publish: '#989898',
	},
	articleContent:{
		title: '#212121',
		date: '#757575',
		text: '#212121',
		line: '#DF032D',
	},
	footer:{
		background: '#D5D5D7',
		line: '#1D1D1D12',
		white: '#FFFFFF',
		title: '#000000',
		text: '#333333',
		inputText:'#9E9E9E',
		social: '#1D1D1D',
		button: '#CC0000',
		buttonHover: '#A20202',
		app: '#1D1D1D',
		appText: '#FFFFFF',
		shadow:{
			first: 'rgba(0, 0, 0, 0.19)',
			second: 'rgba(0, 0, 0, 0.23)',
		},
	},
	notFound:{
		text: '#3d3d3c',
		shape: '#3d3d3c',
	},
	placeholder:{
		feed: '#cecece',
	},
	buttons: {
		ripple:{
			hover: '#b3b3b3',
			bg: '#efefef',
			shape: '#3d3d3c',
			shadow: 'rgba(0, 0, 0, 0.5)',
		},
		block:{
			bg: '#7D7D7D',
			hover: '#616161',
		},
	},
	gradients:{
		preloader:[
			'rgba(165, 165, 165, 1)',
			'rgba(193, 193, 193, 1)',
			'rgba(160, 160, 160, 1)',
			'rgba(245, 245, 245, 1)',
			'rgba(255, 255, 255, 1)',
			'rgba(255, 255, 255, 1)',
		],
		ripple:{
			start: '#FFFFFF',
			end: 'transparent',
		},
		sidebar:{
			start: 'rgba(255, 255, 255, 0.48)', 
			end: 'rgba(255, 255, 255, 0.70)',
		},
	},
	solid:{
		white: '#FFFFFF',
		orangeRed: '#FF5722',
		bluelight: '#03A9F4',
		darkBluelight: '#0288D1',
		social:{
			instagram: {
				color1: '#FDF497',
				color2: '#FDF497',
				color3: '#FD5949',
				color4: '#D6249F',
				color5: '#285AEB',
			},
			facebook: '#3B5998',
			twitter: '#55ACEE',
			youtube: '#E52D27',
			linkedin: '#0976B4',
		},
	},
};

export default PALLETTE_COLORS_US;