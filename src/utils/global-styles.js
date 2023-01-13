import { injectGlobal } from 'styled-components';
import { device } from 'utils/media';
/* eslint no-unused-expressions: 0 */
const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;

injectGlobal`

	/* HTML5 Reset :: style.css */

	/* Let's default this puppy out
	-------------------------------------------------------------------------------*/

	html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
		margin: 0;
		padding: 0;
		border: 0;
		font-size:10px;
		font-weight: normal;
		vertical-align: baseline;
		background: transparent;
	}

	main, article, aside, figure, footer, header, nav, section, details, summary {display: block;}

	/* Handle box-sizing while better addressing child elements:
	   http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
	html {
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	*:focus {
    outline: none;
  }

	/* consider resetting the default cursor: https://gist.github.com/murtaugh/5247154 */

	/* Responsive images and other embedded objects */
	/* if you don't have full control over <img> tags (if you have to overcome attributes), consider adding height: auto */
	img,
	object,
	embed {max-width: 100%;}

	/*
	   Note: keeping IMG here will cause problems if you're using foreground images as sprites.
		In fact, it *will* cause problems with Google Maps' controls at small size.
		If this is the case for you, try uncommenting the following:
	#map img {
			max-width: none;
	}
	*/

	/* we use a lot of ULs that aren't bulleted.
		you'll have to restore the bullets within content,
		which is fine because they're probably customized anyway */
	ul {list-style: none;}

	blockquote, q {quotes: none;}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {content: ''; content: none;}

	a {margin: 0; padding: 0; font-size: 100%; vertical-align: baseline; background: transparent; word-break: break-all !important;}

	del {text-decoration: line-through;}

	abbr[title], dfn[title] {border-bottom: 1px dotted #000; cursor: help;}

	/* tables still need cellspacing="0" in the markup */
	table {border-collapse: separate; border-spacing: 0;}
	th {font-weight: bold; vertical-align: bottom;}
	td {font-weight: normal; vertical-align: top;}

	hr {display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0;}

	input, select {vertical-align: middle;}

	pre {
	  white-space: pre; /* CSS2 */
	  white-space: pre-wrap; /* CSS 2.1 */
	  white-space: pre-line; /* CSS 3 (and 2.1 as well, actually) */
	  word-wrap: break-word; /* IE */
	}

	input[type="radio"] {vertical-align: text-bottom;}
	input[type="checkbox"] {vertical-align: bottom;}

	select, input, textarea {font: 99% sans-serif;}

	table {font-size: inherit; font: 100%;}

	small {font-size: 85%;}

	strong {font-weight: bold;}

	td, td img {vertical-align: top;}

	/* Make sure sup and sub don't mess with your line-heights http://gist.github.com/413930 */
	sub, sup {font-size: 75%; line-height: 0; position: relative;}
	sup {top: -0.5em;}
	sub {bottom: -0.25em;}

	/* standardize any monospaced elements */
	pre, code, kbd, samp {font-family: monospace, sans-serif;}

	/* hand cursor on clickable elements */
	a,
	select,
	label,
	input[type=button],
	input[type=submit],
	input[type=file],
	button {cursor: pointer; -webkit-tap-highlight-color: transparent;}

	/* Webkit browsers add a 2px margin outside the chrome of form elements */
	button, input, select, textarea {margin: 0;}

	/* make buttons play nice in IE */
	button,
	input[type=button] {width: auto;}

	/* Typography */
	@font-face {
    font-family: 'Roboto Thin';
		src: url('/fonts/Roboto-Thin/Roboto-Thin.eot');
		src: local('☺'), url('/fonts/Roboto-Thin/Roboto-Thin.woff') format('woff'), url('/fonts/Roboto-Thin/Roboto-Thin.ttf') format('truetype'), url('/fonts/Roboto-Thin/Roboto-Thin.svg') format('svg');
		font-weight: lighter;
		font-style: normal;
	}
	@font-face {
    font-family: 'Roboto Light';
		src: url('/fonts/Roboto-Light/Roboto-Light.eot');
		src: local('☺'), url('/fonts/Roboto-Light/Roboto-Light.woff') format('woff'), url('/fonts/Roboto-Light/Roboto-Light.ttf') format('truetype'), url('/fonts/Roboto-Light/Roboto-Light.svg') format('svg');
		font-weight: 100;
		font-style: normal;
	}
	@font-face {
    font-family: 'Roboto Regular';
		src: url('/fonts/Roboto-Regular/Roboto-Regular.eot');
		src: local('☺'), url('/fonts/Roboto-Regular/Roboto-Regular.woff') format('woff'), url('/fonts/Roboto-Regular/Roboto-Regular.ttf') format('truetype'), url('/fonts/Roboto-Regular/Roboto-Regular.svg') format('svg');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
    font-family: 'Roboto Medium';
		src: url('/fonts/Roboto-Medium/Roboto-Medium.eot');
		src: local('☺'), url('/fonts/Roboto-Medium/Roboto-Medium.woff') format('woff'), url('/fonts/Roboto-Medium/Roboto-Medium.ttf') format('truetype'), url('/fonts/Roboto-Medium/Roboto-Medium.svg') format('svg');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
    font-family: 'Roboto Bold';
		src: url('/fonts/Roboto-Bold/Roboto-Bold.eot');
		src: local('☺'), url('/fonts/Roboto-Bold/Roboto-Bold.woff') format('woff'), url('/fonts/Roboto-Bold/Roboto-Bold.ttf') format('truetype'), url('/fonts/Roboto-Bold/Roboto-Bold.svg') format('svg');
		font-weight: bold;
		font-style: normal;
	}

	h1, h2, h3, h4, h5, h6{
	  font-family: var(--main-font-bold);
	}

	p, li, a, span, input, button, select {
	  font-family: var(--main-font-normal);
		letter-spacing: 0;
	} 
	/* Variables */
	:root {
		--main-border-radius: ${ SYSTEM === 'US' ? '0px': '25px'};
    	--main-box-shadow: 0 2px 5px rgba(0,0,0,.26);
		--main-font-bold: 'Roboto Bold',  sans-serif;
		--main-font-medium: 'Roboto Medium',  sans-serif;
		--main-font-normal: 'Roboto Regular',  sans-serif;
		--main-font-light: 'Roboto Light',  sans-serif;
		--main-font-thin: 'Roboto Thin',  sans-serif;
	}
	/* Position and sizing of burger button */
	.bm-burger-button {
	  position: fixed;
	  width: 26px;
	  height: 20px;
	  left: 20px;
	  top: 18px;
	}


	/* Position and sizing of clickable cross button */
	.bm-cross-button {
	  height: 24px;
	  width: 24px;
	}

	/* Color/shape of close button cross */
	.bm-cross {
	  background: #bdc3c7;
	}

	/* General sidebar styles */
	.bm-menu {
	  background: #373a47;
	  padding: 2.5em 1.5em 0;
		font-size: 2.15rem ;
		width:250px !important;
		padding-left: 0;
		padding-right: 0;
	}
	a.menu-item{
		font-size: 1.60rem;
	}
	/* Ma.menu-itemorph shape necessary with bubble or elastic */
	.bm-morph-shape {
	  fill: #373a47;
	}

	/* Wrapper for item list */
	.bm-item-list {
	  color: #b8b7ad;
		padding: 0.8em;
		padding-left: 0 !important;
		padding-right: 0 !important;
	}

	/* Styling of overlay */
	.bm-overlay {
	  background: rgba(0, 0, 0, 0.3);
	}

/* Masonry CSS*/
	.my-masonry-grid {
	  display: -webkit-box; // Not needed if autoprefixing
	  display: -ms-flexbox; // Not needed if autoprefixing
	  display: flex;
	}
	.my-masonry-grid_column {
	  padding: 0 2rem;// gutter size
	  background-clip: padding-box;
	}
	.my-masonry-grid_column:nth-child(2) {
		border-left: 1px solid Gray; // gutter size
		background-clip: padding-box;
	}

	// Style your items
	.my-masonry-grid_column > div { // change div to reference your elements you put in <Masonry>
	  margin-bottom: 30px;
	}
	/* List Categories */
	// .categoryNav:hover .containerSubcategory{
	// 	display:block;
	// }

	::-webkit-scrollbar{ width:9px; height:9px; }
	::-webkit-scrollbar-button:start:decrement,
	::-webkit-scrollbar-button:end:increment{
		display:block;
		height:0;
		// background-color:transparent;
	}
	::-webkit-scrollbar-track-piece{
		// background-color:#dedede;
		-webkit-border-radius:0;
		-webkit-border-bottom-right-radius:8px;
		-webkit-border-bottom-left-radius:8px;
	}
	::-webkit-scrollbar-thumb:vertical{
		height:50px;
		background-color:#dedede;
		-webkit-border-radius:8px;
	}
	::-webkit-scrollbar-thumb:horizontal{
		width:50px;
		background-color:#dedede;
		-webkit-border-radius:8px;
	}

	.twitter-tweet {
		margin: 0 auto;
	}

	/* Color/shape of burger icon bars responsive */
	@media (max-width: 425px) {
		.bm-menu {

			height: 90% !important;
			overflow:scroll !important;
			overflow-x:hidden !important;
		}
	}
	@media ${device.mobileS} {
		.feed .my-masonry-grid {
			margin-top: 160px;
		}
		.bm-burger-bars {
			background: #525252;
		}
		.bm-menu {
			background: #fff;
			padding: 2.5em 1.5em 0;
			font-size: 2.15rem ;
			width:100% !important;
			padding-left: 0;
			padding-right: 0;
		}
	}

	@media ${device.tablet} {
		.feed .my-masonry-grid {
			margin-top: 200px;
		}
	}

	@media ${device.laptop} {

		.feed .my-masonry-grid {
			margin-top: 0px;
		}

		.bm-burger-bars {
			background: #fff;
		}
		.bm-menu-wrap{
			width:200px !important;
		}
	}

	.summary{
		&:before {
			content: '•\0000a0';
			font-size:1.3rem;
			font-weight:bold;
		}
	}

	.active .subCategories {
		display:block;
		animation-name: animationSubmenu;
    animation-duration: 1s;
	}
	@keyframes animationSubmenu {
			from {opacity: 0;}
			to {opacity: 1;}
	}

	.inactive .subCategories{
		transform-origin: 50% 0%;
		transform: perspective(250px) rotateX(-90deg);
		transition: all 0.4s ease-in-out;
		height: 0;
		overflow:hidden;
	}
	.active .folding-pannel {
		transform: perspective(350px) rotateX(0deg);
		transition: all 0.1s ease-in-out;
		height: auto;
	}

	.inactive .folding-pannel {
		transform-origin: 50% 0%;
		transform: perspective(250px) rotateX(-90deg);
		transition: all 0.4s ease-in-out;
		height: 0;
		overflow:hidden;
	}

	.suggested-news{
		margin-left:-16rem;
	}
	.suggested-news-container{
		margin: 0 -18rem;
	}
	.react-datepicker-wrapper {
    width: 100%;
	}
	.react-datepicker__input-container {
    width: 100%;
	}
	.react-responsive-modal-modal{
		margin-top:50px !important;
	}

	.googlebtnstyle button{
		position: relative;
    margin: 0 auto;
    width: 100% !important;
    /* margin-top: 3rem; */
    text-align: center;
    cursor: pointer;
    background: none !important;
	}

	.facebookButton{
		background-color: #415D9C;
    border: none;
		margin-right: 20px;
		width: 30px;
    height: 30px;
		i{
			font-size: 20px;
			margin: 0 !important;
			padding: 0 3px;
			color:White;
		}
	}

	.shareWhatsapp{
		width: 30px;
    height: 30px;
    background: #4DC247;
    margin-left: 20px;
		i{
			font-size: 20px;
			margin: 0 !important;
			padding: 5px 6px;
			color:White;
		}
	}

	@media ${device.laptop} {
		.facebookButton{
			margin-right: 0;
			margin-bottom: 20px;
			width: 35px;
	    height: 35px;
			i{
				padding: 5px 6px;
			}
		}
		.shareWhatsapp{
			margin-left: 0;			
			width: 35px;
	    	height: 35px;
			margin-top: 28px;
			i{
				font-size: 22px;
				padding: 6px 9px;
			}
		}
	}

	.btnModalEpicenter{
          margin-top:1rem !important;
          margin-bottom:1rem !important;
          border-radius: .5rem !important;
          background: #ea6911 !important;
          color: #fff !important;
          border: none !important;
          padding: 1rem !important;
          font-weight: bolder !important; 
          transition:background 1s !important;
		  width: 250px !important;
    	  height: 2.4em !important;
    	  font: bold 2.2rem system-ui !important;
          cursor: pointer !important;
        
        &:hover{
          margin-top:1rem !important;
          margin-bottom:1rem !important;
          border-radius: .5rem !important;
          background: #fff !important;
          color: #ea6911 !important;
          border: none !important;
          padding: 1rem !important;
          font-weight: bolder !important;
          cursor: pointer !important;
        }
      }
`;
