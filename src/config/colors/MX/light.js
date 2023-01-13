const PALLETTE_COLORS_MX = {
	NAME: 'LIGHT',
	primary: '#fa7930',
	darkPrimary: '#ea6911',
	ligthPrimary: '#FFCCBC',
	primaryText: '#FFFFFF',
  	background: '#FFFFFF',
	text: '#212121',
	secondaryText: '#757575',
	divider: '#BDBDBD',
	containerMain: '#2A2A2A',
	preloader:{
		brand_fill: '#fa793022',
		brand_stroke: '#fa7930',
		bg: '#fa793015',
		shadow: 'rgba(22, 22 ,22 ,0.15)',
		animations:{
			bg:{
				from: '#fa793022',
				to: '#fa793085',
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
					fill: '#ea6911',
					stroke: 'rgba(255, 255, 255, 1)',
				},
			},
		},
	},
	brand:{
		bg: '#FFFFFF',
		letter: '#0E1011',
	},
	header:{
		bg: '#FFFFFF',
		letter: '#0E1011',
		isotype: '#EA7724',
	},
	navbar:{
		bg:{
			primary: '#FFFFFF',
			secondary: '#FFFFFF',
			link: '#ea6911',
		},
		shadow: 'rgba(0,0,0,0.16)',
		text: '#000000',
		children:{
			bg: '#FFFFFF',
			link:{
				text: '#212121',
				hoverText: '#FFFFFF',
				hoverBg : 'rgba(239, 190, 179, 0.7)',
				border: '#ea6911',
			},
			shadow:{
				first: 'rgba(0,0,0,0.19)',
				second: 'rgba(0,0,0,0.23)',
			},
		},
	},
	sidebar:{
		header:{
			bg: '#FFFFFF',
			border: '#ea6911'
		},
		switcher:{
			label: '#FFFFFF',
			bg: '#9E9E9E',
			circle: '#FAFAFA',
			active: '#FAFAFA35',
		},
		bodyBorder: '#ea6911',
		text: '#FFFFFF',
		item: 'rgba(88, 88, 88, 0.75)',
	},
	feed:{
		title: '#212121',
	},
	articleCard:{
		bg: '#FFFFFF',
		title: '#000000',
		summary: '#828282',
		publish: '#989898',
		line: '#EA7724',
	},
	articleContent:{
		title: '#212121',
		date: '#757575',
		text: '#212121',
	},
	footer:{
		background: '#fcfcfc',
		line: '#1d1d1d33',
		white: '#FFFFFF',
		title: '#000000',
		text: '#000000',
		inputText:'#9E9E9E',
		social: '#404040',
		button: '#ea6911',
		buttonHover: '#af4e0c',
		app: '#252525',
		appText: '#D2D2D2',
		shadow:{
			first: 'rgba(0, 0, 0, 0.19)',
			second: 'rgba(0, 0, 0, 0.23)',
		},
	},
	notFound:{
		text: '#565656',
		shape: '#565656',
	},
	placeholder:{
		feed: '#cecece',
	},
	buttons: {
		ripple:{
			hover: 'rgba(53,53,53,0.4)',
			bg: 'rgba(17,17,17,0.2)',
			shape: '#FFFFFF',
			shadow: 'rgba(0, 0, 0, 0.2)',
		},
		block:{
			bg: '#fa7930',
			hover: '#ea7533',
		},
	},
	gradients:{
		preloader:[
			'rgb(255,255,255)',
		],
		ripple:{
			start: '#FFFFFF',
			end: 'transparent',
		},
		sidebar:{
			start: 'rgba(255, 255, 255, 0.85)', 
			end: 'rgba(214, 214, 214, 0.70)',
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