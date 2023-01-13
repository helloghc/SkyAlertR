
/* eslint  max-len: 0 */
import { merge } from 'lodash';
import fetch from 'node-fetch';
import commonApi from '../../config/api';

const PRIORITY = {
  none: 'none',
  first: 'first',
  now: 'now',
};

const PICS = {
  author: commonApi.skyalert.endpoint.authorsPic.name,
  image: commonApi.skyalert.endpoint.imagesPic.name,
};

const THUMBS = {
  author: commonApi.skyalert.endpoint.authorsThumb.name,
  image: commonApi.skyalert.endpoint.imagesThumb.name,
};

let api = commonApi;

const ENVIRONMENT = process.env.REACT_APP_API.toLocaleLowerCase(); 
const SYSTEM = process.env.REACT_APP_COUNTRY;
const LANGUAGE = process.env.REACT_APP_LANGUAGE;

class SkyAlertAPI {
  constructor(headers = {}) {
    if (!SkyAlertAPI.instance) {
      this.sessionLog = [];
      api = merge(commonApi, headers);
      SkyAlertAPI.instance = this;
    }

    return SkyAlertAPI.instance;
  }

  static init(headers = {}) {
    return new SkyAlertAPI(headers);
  }

  async sendRequest(url, method, body, tryAndRecover = [], priority = PRIORITY.none, multipart = false, headers = {}, isReturnStatus = false) {
    const { headers: headersApi, response: { error, serverError, done } } = api.skyalert;
    const request = {
      method,
      headers: headers || headersApi,
      body: (body && !multipart) ? JSON.stringify(body) : undefined,
    };

    if (multipart) {
      delete request.headers['Content-Type'];
      request.body = body;
    }

    const response = await fetch(url, request);

    if(isReturnStatus){
      return response.status;
    }

    switch (response.status) {
    case done:
      return true;
    case error:
    case serverError: {
      const responseBody = await response.json();
      throw new Error(responseBody.error);
    }
    default: {
      const responseBody = await response.json();
      return responseBody;
    }
    }
  }

  /* Utilities */

  static objToGetParams(obj) {
    const params = Object.keys(obj)
      .map((key) => {
        if (obj[key] !== null && obj[key] !== undefined) {
          if (obj[key] instanceof Array) {
            return obj[key]
              .map(param => `${key}[]=${param}`)
              .join('&');
          }
          return `${key}=${obj[key]}`;
        }
        return null;
      })
      .filter(param => param);
    return `?${params.join('&')}`;
  }

  async buildAndFetch(endpoint, body, tryAndRecover = [SkyAlertAPI.tryAndRecover()], priority, isCached = false) {
    const { name, method } = endpoint;
    const root = isCached ? api.skyalert[ENVIRONMENT].cdn :api.skyalert[ENVIRONMENT].root;
    const url = root + name;
    return (await this.sendRequest(url, method, body, tryAndRecover, priority)).data;
  }

  async buildAndFetchList(endpoint, page, elementsPerPage, extra = {}, isCached = false) {
    const { name, method } = endpoint;
    const params = {
      page,
      epp: elementsPerPage,
      ...extra,
    };
    const root = isCached ? api.skyalert[ENVIRONMENT].cdn : api.skyalert[ENVIRONMENT].root;
    const url = `${root}${name}${SkyAlertAPI.objToGetParams(params)}`;
    return this.sendRequest(url, method, undefined, [SkyAlertAPI.tryAndRecover()]);
  }

  async buildAndFetchMultipart(endpoint, body, file) {
    const { name, method } = endpoint;
    const url = api.skyalert.root + name;
    const formData = new FormData();
    formData.append('body', JSON.stringify(body));

    if (file) {
      if (file instanceof Array) {
        file.forEach(f => formData.append('file[]', f));
      } else {
        formData.append('file', file);
      }
    }

    return (await this.sendRequest(url, method, formData, [SkyAlertAPI.tryAndRecover()], undefined, true)).data;
  }

  /* Configs data */
  getTags() {
    return this.buildAndFetch(api.skyalert.endpoint.tags, undefined, undefined, undefined, true);
  }

  getTagCategories() {
    return this.buildAndFetch(api.skyalert.endpoint.tagCategories, undefined, undefined, undefined, true);
  }

  static async recoverFromExpiredToken(queueRequest, response) {
    console.error('Credentials error');
  }

  static tryAndRecover() {
    return {
      status: api.skyalert.response.error,
      recover: SkyAlertAPI.recoverFromExpiredToken,
    };
  }


  /* Articles */

  getFeed(page, elementsPerPage, tags, type) {
    const { getFeedPage } = api.skyalert.endpoint;
    return this.buildAndFetchList(getFeedPage, page, elementsPerPage, { tags, type, system: SYSTEM, language: LANGUAGE}, true);
  }

  async getArticles(page, elementsPerPage, search, author) {
    const { getArticles } = api.skyalert.endpoint;
    return this.buildAndFetchList(getArticles, page, elementsPerPage, { search, author }, true);
  }

  async getArticle(idOrSlug) {
    const { name, method } = api.skyalert.endpoint.getArticle;
    return this.buildAndFetch({ method, name: name(idOrSlug) }, undefined, undefined, undefined, true);
  }

  async getArticleRelated(idOrSlug) {
    const { name, method } = api.skyalert.endpoint.getArticlesRelated;
    return this.buildAndFetch({ method, name: name(idOrSlug) }, undefined, undefined, undefined, true);
  }

  /* Authors */
  async getAuthor(idOrSlug) {
    const { name, method } = api.skyalert.endpoint.getAuthor;
    return this.buildAndFetch({ method, name: name(idOrSlug) }, undefined, undefined, undefined, true);
  }

  /* PICS */
  static getPicURL(idOrSlug, type) {
    const name = PICS[type];
    const url = api.skyalert[ENVIRONMENT].cdn + name(idOrSlug);
    return url;
  }

  /* THUMBS */
  static getThumbURL(idOrSlug, type) {
    const name = THUMBS[type];
    const url = api.skyalert[ENVIRONMENT].cdn + name(idOrSlug);
    return url;
  }

  /* LEADS */
  async createLead(body){
    const { name, method } = api.skyalert.aws.endpoint;
    const { headers }= api.skyalert.aws.production;
    const root = api.skyalert.aws.production.root;
    const url = root + name;
    return await this.sendRequest(url, method, body, undefined, undefined, false, headers, true);
  }
}

/*

             *     ,MMM8&&&.            *             In Memoriam
                  MMMM88&&&&&    .                    Coca (2016-2018)
                 MMMM88&&&&&&&
     *           MMM88&&&&&&&&
                 MMM88&&&&&&&&
                 'MMM88&&&&&&'
                   'MMM8&&&'      *
          |\___/|
          )     (             .              '
         =\     /=
           )===(       *
          /     \
          |     |
         /       \
         \       /
  _/\_/\_/\__  _/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
  |  |  |  |( (  |  |  |  |  |  |  |  |  |  |
  |  |  |  | ) ) |  |  |  |  |  |  |  |  |  |
  |  |  |  |(_(  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

*/

export default SkyAlertAPI;
