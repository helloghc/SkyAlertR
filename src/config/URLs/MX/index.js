import strings from 'config/strings';

const LINK = 'http://skyalert.mx';

const URLS = {
    LIST_NAV: {
        home: {
            text: strings().URLS.home,
            url: LINK,
        },
        solutions: {
            text: strings().URLS.solutions,
            url: `${LINK}/suite-de-soluciones`,
        },
        app: {
            text: strings().URLS.app,
            url: `${LINK}/app`,
        },
        redSkyAlert: {
            text: strings().URLS.redskyalert,
            url: `${LINK}/red-skyalert`, 
        },
        about: {
            text: strings().URLS.about,
            url: `${LINK}/por-que-skyalert`,
        },
        press: {
            text: strings().URLS.press,
            url: `${LINK}/prensa`,
        },
        news:{
            text: strings().URLS.news,
            url: '/',
        }
    },
    LIST_SIDE: {
        home: {
            text: strings().URLS.home,
            url: LINK,
        },
        solutions: {
            text: strings().URLS.solutions,
            url: `${LINK}/suite-de-soluciones`,
        },
        app: {
            text: strings().URLS.app,
            url: `${LINK}/app`,
        },
        redSkyAlert: {
            text: strings().URLS.redskyalert,
            url: `${LINK}/red-skyalert`, 
        },
        about: {
            text: strings().URLS.about,
            url: `${LINK}/por-que-skyalert`,
        },
        press: {
            text: strings().URLS.press,
            url: `${LINK}/prensa`,
        },
    },
    LIST_SOCIAL_NETWORKS:{
        facebook:{
            link: 'https://www.facebook.com/SkyAlertMx',
            img: '/images/facebook-white.png',
            alt: 'Facebook',
            style: 'fa fa-facebook-official',
            },
        twitter:{
            link: 'https://twitter.com/SkyAlertMx',
            img: '/images/twitter-white.png',
            alt: 'Twitter',
            style: 'fa fa-twitter',
        },
        instagram:{
            link: 'https://www.instagram.com/skyalertmx',
            img: '/images/instagram-white.png',
            alt: 'Instagram',
            style: 'fa fa-instagram',
        },
        youtube:{
            link:'https://www.youtube.com/channel/UCJwJrlu4G7kmOKyoVXzUhbA',
            img: '/images/youtube-white.png',
            alt: 'Youtube',
            style: 'fa fa-youtube-play',
        },
        linkedin:{
            link: 'https://www.linkedin.com/company/skyalert-mx',
            img: '/images/linkedin-white.png',
            alt: 'LinkedIn',
            style: 'fa fa-linkedin',
        },

    },
    LIST_APP_DOWNLOAD:{
        android:{
            link: 'https://play.google.com/store/apps/details?id=com.disappster.skyalert&hl=es_419',
            img: {
                LIGHT: '/images/store/GooglePlay_Black.svg',
                DARK: '/images/store/GooglePlay_Black.svg',
            },
            alt: 'Android',
        },
        iOS:{
            link: 'https://itunes.apple.com/mx/app/skyalert/id774381416?l=en&mt=8',
            img: {
                LIGHT: '/images/store/AppStore_Black.svg',
                DARK: '/images/store/AppStore_Black.svg',
            },
            alt: 'iOS',
        },
        huawei:{
            link: 'https://appgallery.huawei.com/#/app/C102311417',
            img: {
                LIGHT: '/images/store/AppGallery_Black.svg',
                DARK: '/images/store/AppGallery_Black.svg',
            },
            alt: 'Huawei',
        }
    },
    LIST_GENERAL_TERMS_CODITIONS:{
        terms: {
            text: strings().URLS.terms,
            url: `${LINK}/terminos-y-condiciones`,
        },
        privacy:{
            text: strings().URLS.privacy,
            url: `${LINK}/aviso-de-privacidad`,
        },
    },
    LINK_HOME: LINK,
};

export default URLS;