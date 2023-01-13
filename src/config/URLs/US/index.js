import strings from 'config/strings';

const LINK = 'http://skyalertusa.com/';

const URLS = {
    LIST_NAV: {
        home: {
            text: strings().URLS.home,
            url: LINK,
        },
        about: {
            text: strings().URLS.about,
            url: `${LINK}about-us/`,
        },
        solutions: {
            text: strings().URLS.solutions,
            url: `${LINK}solutions/`,
        },
        howitworks: {
            text: strings().URLS.howitworks,
            url: `${LINK}how-it-works/`,
        },
        contact: {
            text: strings().URLS.contact,
            url: `${LINK}contact/`,
        },
    },
    LIST_SIDE: {
        home: {
            text: strings().URLS.home,
            url: LINK,
            img: 'newspaper.png',
        },
        about: {
            text: strings().URLS.about,
            url: `${LINK}about-us/`,
            img: 'company.png',
        },
        solutions: {
            text: strings().URLS.solutions,
            url: `${LINK}solutions/`,
            img: 'podcast.png',
        },
        howitworks: { 
            text: strings().URLS.howitworks,
            url: `${LINK}how-it-works/`,
            img: 'epicenter.png',
        },
        contact: { 
            text: strings().URLS.contact,
            url: `${LINK}contact/`,
            img: 'mobile-app.png',
        },
    },
    LIST_SOCIAL_NETWORKS:{
        facebook:{
            link: 'https://www.facebook.com/SkyAlertUSA',
            img: '/images/facebook-white.png',
            alt: 'Facebook',
            style: 'fb',
            },
        twitter:{
            link: 'https://twitter.com/SkyAlertUSA',
            img: '/images/twitter-white.png',
            alt: 'Twitter',
            style: 'tw',
        },
        instagram:{
            link: 'https://www.instagram.com/skyalertusa/',
            img: '/images/instagram-white.png',
            alt: 'Instagram',
            style: 'ig',
        },
    },
    //Not Yet
    // LIST_APP_DOWNLOAD:{
    //     iOS:{
    //         link: 'https://itunes.apple.com/mx/app/skyalert/id774381416?l=en&mt=8',
    //         img: '/images/icon_apple.png',
    //         alt: 'iOS',
    //         text: 'App Store',
    //     },
    // },
    //Not Yet
    LIST_GENERAL_TERMS_CODITIONS:{
        terms: {
            text: strings().URLS.terms,
            url: '#',
        },
        privacy:{
            text: strings().URLS.privacy,
            url: '#',
        },
    },
    LINK_HOME: LINK,
};

export default URLS;