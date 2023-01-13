import Markdown from 'markdown-it';
import { getError } from './error';
import Validator from '../utils/validator';
import Schema from '../utils/schema';
import BaseModel from '../utils/basemodel';
import SkyAlertAPI from '../controllers/SkyAlertAPI';

/**
 * @const {Array}[ARTICLE_TYPES]
 * Manage the kinds of posible articles
 */
const ARTICLE_TYPES = [
  'news',
  'survey',
  'video',
];

const ARTICLE_TYPES_LABELS = [
  'Noticia',
  'Encuesta',
  'Video',
];

/**
 * @const {Array}[ARTICLE_TYPES]
 * Manage the kinds of posible author types
 */
const AUTHOR_TYPES = [
  'own',
  'author',
];

const AUTHOR_TYPES_LABELS = [
  'Redacción/staff',
  'Autor',
];

/**
 * @const {Array}[ARTICLE_TYPES]
 * Manage the kinds of posible main media types
 */
const MAIN_MEDIA_TYPES = [
  'Image',
  'SocialMedia',
  'Survey',
  'Video',
];

const MAIN_MEDIA_TYPES_LABELS = [
  'Imagen',
  'Social Media',
  'Encuesta',
  'Video',
];

/**
 * Schema to validate the class
 */
const schema = new Schema({
  /* Move to generic Schema */
  _id: {
    type: String,
  },
  id: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
  score: {
    type: Number,
  },
  /* Request removal */
  __v: {
    type: Number,
  },
  /* Specific properties */
  type: {
    type: String,
    enum: ARTICLE_TYPES,
    editable: true,
    label: 'Tipo',
    enumLabels: ARTICLE_TYPES.map((role, index) => ({
      value: ARTICLE_TYPES[index],
      text: ARTICLE_TYPES_LABELS[index],
    })),
  },
  label: {
    type: String,
    editable: true,
    label: 'Encabezado',
  },
  title: {
    type: String,
    editable: true,
    label: 'Título',
  },
  slug: {
    type: String,
    editable: true,
    label: 'Slug / URL',
  },
  summary: {
    type: String,
    editable: true,
    label: 'Resumen',
  },
  content: {
    type: String,
    editable: true,
    label: 'Contenido',
  },
  author: new Schema({
    type: {
      type: String,
      enum: AUTHOR_TYPES,
      editable: true,
      label: 'Firmar con:',
      enumLabels: AUTHOR_TYPES.map((role, index) => ({
        value: AUTHOR_TYPES[index],
        text: AUTHOR_TYPES_LABELS[index],
      })),
    },
    _id: {
      type: String,
      editable: true,
      label: 'Autor',
    },
  }),
  source: {
    type: String,
    editable: true,
    label: 'Fuente',
  },
  mainMedia: new Schema({
    type: {
      type: String,
      enum: MAIN_MEDIA_TYPES,
      editable: true,
      label: 'Tipo de contenido principal',
      enumLabels: MAIN_MEDIA_TYPES.map((role, index) => ({
        value: MAIN_MEDIA_TYPES[index],
        text: MAIN_MEDIA_TYPES_LABELS[index],
      })),
    },
    document: {
      type: String,
      editable: true,
      label: 'Contenido principal',
    },
  }),
  headMedia: {
    type: String,
    editable: true,
    label: 'Contenido de Encabezado',
  },
  display: {
    type: String,
    editable: true,
    label: 'Jerarquía',
  },
  isBranded: {
    type: Boolean,
    editable: true,
    label: '¿Es Patrocinado?',
  },
  publishAt: {
    type: String,
    editable: true,
    label: 'Publicar',
  },
  stickyUntil: {
    type: String,
    editable: true,
    label: 'Mantener en primera plana hasta:',
  },
  stickyPriority: {
    type: Number,
    editable: true,
    label: 'Prioridad en primera plana',
  },
  media: {
    type: Array,
    editable: true,
    label: 'Multimedia',
  },
  candidates: {
    type: Array,
    editable: true,
    label: 'Candidatos relacionados',
  },
  tags: {
    type: Array,
    editable: true,
    label: 'Etiquetas',
  },
  keywords: {
    type: Array,
    editable: true,
    label: 'Palabras clave',
  },
  history: {
    type: Array,
  },
  editor: {
    type: String,
  },
  related: {
    type: Array,
  },
  side: {
    type: String,
    enum: ['left', 'right'],
    editable: true,
    label: 'Columna en Feed',
    enumLabels: [{ text: 'Izquiera', value: 'left' }, { text: 'Derecha', value: 'right' }],
  },
  approved: {
    type: Boolean,
    editable: true,
    label: 'Aprobado',
  },
});

/**
 * @class Article
 */
class Article extends BaseModel {
  /**
   * Creates an instance of Article.
   * @param {Object} { article }
   * @memberof Article
   */
  constructor(article) {
    super(schema, 'article');
    Object.keys(article).forEach((key) => {
      this[key] = article[key];
    });
  }

  /**
   * Get all the content in markdown format as an
   * Array
   * @returns Array
   * @memberof Article
   */
  getContent() {
    const md = new Markdown();
    const parsed = md.parse(this.content);
    return this._getMedia(parsed);
  }

  /**
   * Sanitize all the media, survey, chart,
   * video and social content
   * @param {Array} parsed
   * @returns Array
   * @memberof Article
   */
  _getMedia(parsed) {
    return parsed.reduce((acc, token) => {
      if (token.type.includes('close')) return [...acc];

      let children = null;
      let newToken = null;
      if (token.children) {
        children = [...this._getChildren(token.children)];

        newToken = { ...token };

        newToken.children = children;
      }

      return (newToken) ? [...acc, { ...newToken }] : [...acc, { ...token }];
    }, []);
  }

  _getChildren(children) {
    let captionIndex;
    return children.map((token, index) => {
      if (token.type === 'link_close') return undefined;

      if (captionIndex === index) return undefined;

      if (token.type === 'link_open') {
        const data = this._matchMedia(token.attrs[0]);

        if (Array.isArray(data)) return token;

        captionIndex = (children[index + 1].type === 'text') ? index + 1 : null;

        const link = { ...data, caption: (captionIndex) ? children[captionIndex].content : 'no-caption' };

        return link;
      }

      return token;
    });
  }

  /**
   * Make a match between the link
   * and the media
   * @param {Array} array
   * @returns Object
   * @memberof Article
   */
  _matchMedia(array) {
    const ref = array[1];

    if (ref.includes('$image')) {
      return { type: 'image', ...this.getImageContent(ref.split(':')[1]) };
    }

    if (ref.includes('$video')) {
      return { type: 'video', ...this.getVideoContent(ref.split(':')[1]) };
    }

    if (ref.includes('$social')) {
      return { type: 'social', ...this.getSocialContent(ref.split(':')[1]) };
    }

    if (ref.includes('$chart')) {
      return { type: 'chart', ...this.getChartContent(ref.split(':')[1]) };
    }

    return array;
  }

  /**
   * Match the image ID with the info
   * in the media attribute
   * @param {String} id
   * @returns Object
   * @memberof Article
   */
  getImageContent(id) {
    const media = [...this.media];

    return {
      content: {
        ...media.reduce((acc, element) => {
          if (element.type === 'Image' && element._id === id) return { ...acc, ...element };

          return { ...acc };
        }),
      },
    };
  }

  /**
   * Match the video ID with the info
   * in the media attribute
   * @param {String} id
   * @returns Object
   * @memberof Article
   */
  getVideoContent(id) {
    const media = [...this.media];

    return {
      content: {
        ...media.reduce((acc, element) => {
          if (element.type === 'Video' && element._id === id) return { ...acc, ...element };

          return { ...acc };
        }),
      },
    };
  }

  /**
   * Match the social ID with the info
   * in the media attribute
   * @param {String} id
   * @returns Object
   * @memberof Article
   */
  getSocialContent(id) {
    const media = [...this.media];

    return {
      content: {
        ...media.reduce((acc, element) => {
          if (element.type === 'SocialMedia' && element._id === id) return { ...acc, ...element };

          return { ...acc };
        }),
      },
    };
  }

  /**
   * Match the survey ID with the info
   * in the media attribute
   * @param {String} id
   * @returns Object
   * @memberof Article
   */
  getSurveyContent(id) {
    const media = [...this.media];

    return {
      content: {
        ...media.reduce((acc, element) => {
          if (element.type === 'Survey' && element._id === id) return { ...acc, ...element };

          return { ...acc };
        }),
      },
    };
  }

  /**
   * Match the chart ID with the info
   * in the media attribute
   * @param {String} id
   * @returns Object
   * @memberof Article
   */
  getChartContent(id) {
    const media = [...this.media];

    return {
      content: {
        ...media.reduce((acc, element) => {
          if (element.type === 'Chart' && element._id === id) return { ...acc, ...element };

          return { ...acc };
        }),
      },
    };
  }

  /**
   * Fetch the details of the article using the _id or
   * id attribute. If not _id or id, returns null
   * @returns Article | Null
   * @memberof Article
   */
  async getDetails() {
    const id = this._id || this.id;

    if (!id) return null;

    try {
      const { article } = await SkyAlertAPI.init().getArticle(id);

      /* eslint-disable-next-line */
      const sanitized = new Article(article);

      Object.keys(sanitized).forEach((key) => {
        this[key] = sanitized[key];
      });

      return this;
    } catch (error) {
      const e = getError(error);
      console.error(e);
      throw e;
    }
  }

  /**
   * Fetch the related articles using the _id or
   * id attribute. If not _id or id, returns null
   * @returns Array
   * @memberof Article
   */
  async getRelated() {
    const id = this._id || this.id;

    if (!id) return null;

    try {
      const { articles } = await SkyAlertAPI.init().getArticleRelated(id);

      /* eslint-disable-next-line */
      this.related = articles.map(value => new Article(value));

      return this.related;
    } catch (error) {
      const e = getError(error);
      console.error(e);
      throw e;
    }
  }
}


/**
 * New validator to validate the Schema
 */
// const validator = new Validator(schema);

/**
 * New object with proxy to control the setter and constructor
 */
/* const ProxyArticle = validator.generateProxy(Article);

export default ProxyArticle; */

export default Article;
