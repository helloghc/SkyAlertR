/**
 * This file contains info related to server, endpoints, and headers.
 * Everything related to server requests.
 */

const api = {
  skyalert: {
    aws: {
      production: {
          root: 'https://c8btjlx1sg.execute-api.us-east-2.amazonaws.com/prod',
          headers:{
              'Content-Type': 'application/json',
              'x-api-key': 'uks3cgatl0cz2a5sosfbbrpi7ai4jk03',
          }
      },
      staging: {
          root: 'https://c8btjlx1sg.execute-api.us-east-2.amazonaws.com/prod',
          headers:{
              'Content-Type': 'application/json',
              'x-api-key': 'uks3cgatl0cz2a5sosfbbrpi7ai4jk03',
          }
      },
      endpoint:{
        name:'/contact-form',
        method: 'POST',
      },
  },
    production:{
      root: 'https://clients-api.skyalert.mx',
      cdn: 'https://clients-api.skyalert.mx',
      headers: {
        'X-Application-Key': 'X6am56kg6RJOcl7fJp2Q',
        'Content-Type': 'application/json',
      }, 
    },
    staging:{
      root: 'http://clients-api.stg.skyalert.mx',
      cdn: 'http://clients-api.stg.skyalert.mx',
      headers: {
        'X-Application-Key': 'aaaaaaaaaaaaaaaaaaaa',
        'Content-Type': 'application/json',
      },
    }, 
    endpoint: {
      /* Configs */
      tags: {
        name: '/article-tags',
        method: 'GET',
      },
      tagCategories: {
        name: '/article-tag-categories',
        method: 'GET',
      },
      /* Articles */
      getFeedPage: {
        name: '/articles/feed',
        method: 'GET',
      },
      getArticles: {
        name: '/articles',
        method: 'GET',
      },
      getArticle: {
        name: idOrSlug => `/articles/${idOrSlug}`,
        method: 'GET',
      },
      getArticlesRelated: {
        name: idOrSlug => `/articles/${idOrSlug}/related`,
        method: 'GET',
      },
      /* Authors */
      getAuthor: {
        name: idOrSlug => `/authors/${idOrSlug}`,
        method: 'GET',
      },
      /* Pictures */
      authorsPic: {
        name: id => `/authors/${id}/pic`,
      },
      candidatesPic: {
        name: id => `/candidates/${id}/pic`,
      },
      coalitionsPic: {
        name: id => `/coalitions/${id}/pic`,
      },
      imagesPic: {
        name: id => `/media/images/${id}/pic`,
      },
      partiesPic: {
        name: id => `/parties/${id}/pic`,
      },
      /* Thumb Pics */
      authorsThumb: {
        name: id => `/authors/${id}/thumb`,
      },
      candidatesThumb: {
        name: id => `/candidates/${id}/thumb`,
      },
      coalitionsThumb: {
        name: id => `/coalitions/${id}/thumb`,
      },
      imagesThumb: {
        name: id => `/media/images/${id}/thumb`,
      },
      partiesThumb: {
        name: id => `/parties/${id}/thumb`,
      },
    },
    response: {
      success: 200,
      done: 204,
      error: 400,
      serverError: 500,
    },
  },
};

export default api;
