const PALLETTE_COLORS_MX = {
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
		brand_fill: 'rgba(255,255,255, 0.22)',
		brand_stroke: 'rgba(255,255,255, 1)',
		bg: '#757575',
		shadow: 'rgba(22, 22 ,22 ,0.15)',
		animations:{
			bg:{
				from: 'rgba(255, 255, 255, 0)',
				to: 'rgba(255, 255, 255, 0.8)',
			},
			pulse:{
				porcent_0 : [
					'rgba(255, 255, 255, 0.2)',
					'rgba(255, 255 , 255, 0)',
				],
				porcent_25 : [
					'rgba(255, 255, 255, 0)',
					'rgba(255, 255, 255, 0.5)',
				],
				porcent_50 : [
					'rgba(255, 255, 255, 0)',
					'rgba(255, 255 , 255, 0.2)',
				],
				porcent_100 : [
					'rgba(255, 255, 255, 0.2)',
					'rgba(255, 255 , 255, 0)',
				],
			},
			filling:{
				porcent_0 : 'rgba(255, 255, 255, 0.3)',
				porcent_25: 'rgba(255, 255, 255, 0.5)',
				porcent_95: 'rgba(255, 255, 255, 0.8)',
				porcent_100: {
					fill: '#FF5722',
					stroke: 'rgba(255, 255, 255, 1)',
				},
			},
		},
	},
	brand:{
		bg: '#FF5722',
		letter: '#FFFFFF',
	},
	header:{
		bg: '#404040',
		letter: '#FFFFFF',
		isotype: '#FF5722',
	},
	navbar:{
		bg:{
			primary: '#212121',
			secondary: '#2A2A2A',
			link: '#EA6911',
		},
		shadow: 'rgba(0,0,0,0.16)',
		text: '#FFFFFF',
		children:{
			bg: '#565656',
			link:{
				text: '#FFFFFF',
				hoverText: '#FFFFFF',
				hoverBg : 'rgba(222, 222, 222, 0.15)',
				border: '#FFFFFF',
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
			label: '#FF5722',
			bg: '#9E9E9E',
			circle: '#FF5722',
			active: '#FF572235',
		},
		bodyBorder: '#212121',
		text: '#FFFFFF',
		item: 'rgba(39, 39, 39, 0.75)',
	},
	feed:{
		title: '#FFFFFF',
	},
	articleCard:{
		bg: '#212121',
		title: '#FFFFFF',
		summary: '#d2d2d2',
		publish: '#989898',
	},
	articleContent:{
		title: '#FFFFFF',
		date: '#FF5722',
		text: '#FFFFFF',
		line: '#FF5722',
	},
	footer:{
		background: '#252525',
		line: '#65656533',
		white: '#FFFFFF',
		title: '#FFFFFF',
		text: '#AFAFAF',
		inputText:'#9E9E9E',
		social: '#404040',
		button: '#7D7D7D',
		buttonHover: '#9E9E9E',
		app: '#545454',
		appText: '#D2D2D2',
		shadow:{
			first: 'rgba(0, 0, 0, 0.19)',
			second: 'rgba(0, 0, 0, 0.23)',
		},
	},
	notFound:{
		text: '#FFFFFF',
		shape: '#FF5722',
	},
	placeholder:{
		feed: '#575757',
	},
	buttons: {
		ripple:{
			hover: 'rgba(255,255,255,0.4)',
			bg: 'rgba(255,255,255,0.2)',
			shape: '#FFFFFF',
			shadow: 'rgba(0, 0, 0, 0.2)',
		},
		block:{
			bg: '#7D7D7D',
			hover: '#9E9E9E',
		},
	},
	gradients:{
		preloader:[
			'#c3c3c3',
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

export default PALLETTE_COLORS_MX;