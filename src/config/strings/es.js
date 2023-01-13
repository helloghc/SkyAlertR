const strings = {
    TIME:{
        ago: (time)=>`Hace ${time}`,
    },
    ROUTE:{
        news: 'noticias',
    }, 
    URLS:{
        home: 'Home',
        press: 'Prensa',
        solutions: 'Suite de soluciones',
        about: '¿Por qué SkyAlert',
        products: 'Productos',
        app: 'App',
        epicenter: 'Epicenter',
        redskyalert: 'REDSkyAlert',
        news: 'SkyAlert News',
        terms: 'Términos y Condiciones de Uso',
        privacy: 'Aviso de privacidad', 
    },
    SIDEBAR:{
        themeMode: 'Modo Noche',
    },
    FEED:{
        titlePosts: 'SkyAlert News',
        moreResults: 'Más Resultados',
    },
    ARTICLE:{
        content:{
            source: 'Fuente:',
        },
    }, 
    FOOTER:{
        brand:{
            slogan: 'Prevención en tus manos.',
            description: 'Una empresa orgullosamente mexicana con el sistema de mayor cobertura en servicios de alertamiento sísmico.',
        },
        contact:{
            title: '¿En qué te podemos ayudar?',
            email: 'contacto@skyalert.mx',
            phone: '55 7902 0029',
            address: 'Canaima 12, La Loma, 54060 Tlalnepantla, Méx',
        },
        epicenter:{
            title:'Epicenter',
            subtitle: 'Servicio de Alertamiento Sísmico para Empresas.',
            linkText: 'Quiero una cotización',
        },
        newsletter:{
            title: '',
            placeholder:'',
            send:'',
        },
        socialNetworks:{
            title:'Síguenos',
        },
        downloadApp:{
            title:'Disponible en', 
            subscribe: '',
        },
        copyright: (YEAR) => `Copyright 2012 - ${YEAR} |  All Rights Reserved.`,
    },
    NOTFOUND:{
        title: 'ERROR 404',
        subtitle: 'PÁGINA NO ENCONTRADA',
    },
};

export default strings;