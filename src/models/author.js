import { getError } from './error';
import Article from './article';
import Validator from '../utils/validator';
import Schema from '../utils/schema';
import BaseModel from '../utils/basemodel';
import SkyAlertAPI from '../controllers/SkyAlertAPI';

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
  /* Request removal */
  __v: {
    type: Number,
  },
  /* Specific properties */
  name: {
    type: String,
    editable: true,
    label: 'Nombre',
  },
  slug: {
    type: String,
  },
  bio: {
    type: String,
    editable: true,
    label: 'Biografía',
  },
  pic: new Schema({
    filename: {
      type: String,
    },
    exists: {
      type: Boolean,
    },
    mime: {
      type: String,
    },
    size: new Schema({
      width: {
        type: String,
      },
      height: {
        type: String,
      },
    }),
    focus: new Schema({
      left: {
        type: Number,
      },
      top: {
        type: Number,
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
    }),
  }),
  socialMedia: new Schema({
    facebook: {
      type: String,
      editable: true,
      label: 'Facebook',
    },
    twitter: {
      type: String,
      editable: true,
      label: 'Twitter',
    },
    instagram: {
      type: String,
      editable: true,
      label: 'Instagram',
    },
    google: {
      type: String,
      editable: true,
      label: 'Google +',
    },
    linkedin: {
      type: String,
      editable: true,
      label: 'LinkedIn',
    },
  }),
  latest: {
    type: Array,
  },
});


/**
 * @class Author
 */
class Author extends BaseModel {
  /**
   * Creates an instance of Author.
   * @param {Object} author
   * @memberof Author
   */
  constructor(author) {
    super(schema, 'author');
    Object.keys(author).forEach((key) => {
      this[key] = author[key];
    });
  }

  /**
   * Fetch the details of the author using the _id or
   * id attribute. If not _id or id, returns null
   * @returns Author | Null
   * @memberof Author
   */
  async getDetails() {
    const id = this._id || this.id;

    if (!id) return null;

    try {
      const { author } = await SkyAlertAPI.init().getAuthor(id);

      /* eslint-disable-next-line */
      const sanitized = new Author(author);

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
   * Returns a URL to the pic
   * of the author
   * @returns String
   * @memberof Author
   */
  getPic() {
    const id = this.id || this._id;

    if (!id) return null;

    return SkyAlertAPI.getPicURL(id, this.alias);
  }

  /**
   * Returns a URL to the thumbnail
   * of the author
   * @returns String
   * @memberof Author
   */
  getThumb() {
    const id = this.id || this._id;

    if (!id) return null;

    return SkyAlertAPI.getThumbURL(id, this.alias);
  }

  /**
   * Fetch the latest articles for the author.
   * If not _id or id, returns null
   * @returns Array
   * @memberof Author
   */
  async getLatest(elementsPerPage) {
    const id = this._id || this.id;

    if (!id) return null;

    try {
      const { data: { articles } } = await SkyAlertAPI.init()
        .getArticles(1, elementsPerPage, undefined, this._id);

      // console.log(articles)

      /* eslint-disable-next-line */
      this.latest = articles.map(value => new Article(value));

      return this.latest;
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
/* const ProxyAuthor = validator.generateProxy(Author);

export default ProxyAuthor; */

export default Author;
