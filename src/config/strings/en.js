const strings = {
    TIME:{
        ago: (time)=>`${time} ago`,
    }, 
    ROUTE:{
        news: 'news',
    },
    URLS:{
        home: 'Go SkyAlert USA',
        about: 'About us',
        solutions: 'Solutions',
        howitworks: 'How it works',
        contact: 'Contact',
        terms: 'Terms',
        privacy: 'Privacy',
        store:{
            android: '',
            ios: '',
        },
    },
    ARTICLE:{
        content:{
            source: 'Source:',
        },
    },
    SIDEBAR:{
        themeMode: 'Dark mode',
    }, 
    FEED:{
        titlePosts: 'RECENT POSTS',
        moreResults: 'More Results',
    },
    FOOTER:{
        brand:{
            slogan: '#BeEarthquakeReady',
            description: '',
        },
        contact:{
            title: 'Contact',
            email: 'contact@skyalertusa.com',
            phone: '',
            address: 'Shattuck Ave #2150, Berkeley CA. 94704',
        },
        epicenter:{
            title:'',
            linkText: '',
        },
        newsletter:{
            title: '',
            placeholder:'',
            send:'',
        },
        socialNetworks:{
            title:'Follow Us',
        },
        downloadApp:{
            title:'Be the first to download out app',
            subscribe: 'Subscribe',
        },
        copyright: (YEAR) => `Copyright 2011 - ${YEAR} | All rights reserved.`,
    },
    NOTFOUND:{
        title: 'ERROR 404',
        subtitle: 'NOT FOUND PAGE'
    },
};

export default strings;