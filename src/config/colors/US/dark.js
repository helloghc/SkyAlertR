const PALLETTE_COLORS_US = {
	NAME: 'DARK',
	primary: '#212121',
	darkPrimary: '#212121',
	ligthPrimary: '#FFCCBC',
	primaryText: '#FFFFFF',
  	background: '#383838',
	text: '#FFFFFF',
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
		bg: '#FFFFFF',
		letter: '#DF032D',
	},
	header:{
		bg: '#404040',
		letter: '#FFFFFF',
		isotype: '#DF032D',
	},
	navbar:{
		bg:{
			primary: '#212121',
			secondary: '#2A2A2A',
			link: 'rgba(97, 97, 97, 0.3)',
		},
		shadow: 'rgba(0,0,0,0.16)',
		text: '#FFFFFF',
		children:{
			bg: '#565656',
			link:{
				text: '#FFFFFF',
				hoverText: '#FFFFFF',
				hoverBg : 'rgba(222, 222, 222, 0.15)',
				border: '#DF032D',
			},
			shadow:{
				first: 'rgba(0,0,0,0.19)',
				second: 'rgba(0,0,0,0.23)',
			},
		},
	},
	sidebar:{
		header:{
			bg: 'rgba(0, 0, 0, 0.3)',
			border: 'rgba(255, 255, 255, 0.5)',
		},
		switcher:{
			label: '#DF032D',
			bg: '#9E9E9E',
			circle: '#DF032D',
			active: '#DF032D35',
		},
		bodyBorder: '#212121',
		text: '#FFFFFF',
		item: 'rgba(8, 8, 8, 0.15)',
	},
	feed:{
		title: '#FFFFFF',
	},
	articleCard:{
		bg: '#5c5c5c',
		title: '#FFFFFF',
		summary: '#d2d2d2',
		publish: '#989898',
		line: '#DF032D',
	},
	articleContent:{
		title: '#FFFFFF',
		date: '#DF032D',
		text: '#FFFFFF',
	},
	footer:{
		background: '#252525',
		line: '#1d1d1d',
		white: '#FFFFFF',
		title: '#DF032D',
		text: '#FFFFFF',
		inputText:'#9E9E9E',
		social: '#404040',
		button: '#DF032D',
		buttonHover: '#98031f',
		app: '#545454',
		appText: '#FFFFFF',
		shadow:{
			first: 'rgba(0, 0, 0, 0.19)',
			second: 'rgba(0, 0, 0, 0.23)',
		},
	},
	notFound:{
		text: '#FFFFFF',
		shape: '#FFFFFF',
	},
	placeholder:{
		feed: '#575757',
	},
	buttons: {
		ripple:{
			hover: 'rgba(255,255,255,0.4)',
			bg: 'rgba(255,255,255,0.2)',
			shape: '#DF032D',
			shadow: 'rgba(0, 0, 0, 0.2)',
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
			start: 'rgba(53, 53, 53, 0.85)', 
			end: 'rgba(199, 199, 199, 0.65)',
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