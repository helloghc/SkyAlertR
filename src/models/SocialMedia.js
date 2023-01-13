import Validator from '../utils/validator';
import Schema from '../utils/schema';
import BaseModel from '../utils/basemodel';

/**
 * @const
 * Constant array with the two possible values for type
 */
const TYPES = ['Image', 'SocialMedia', 'Video'];

const NETWORK = ['facebook', 'twitter', 'instagram', 'socialmedia', 'youtube'];

/**
 * @const
 * Schema to validate the class
 */
const schema = new Schema({
  type: {
    type: String,
    enum: TYPES,
  },
  text: {
    type: String,
  },
  url: {
    type: String,
  },
  network: {
    type: String,
  },
  _searchText: {
    type: String,
    enum: NETWORK,
  },
});

/**
 * Class to manage the Media object
 * @class Media
 */
class SocialMedia extends BaseModel {
  /**
   * Creates an instance of SocialMedia.
   * @param {any} media
   * @memberof SocialMedia
   */
  constructor(media) {
    super(schema, 'media');
    Object.keys(media).forEach((key) => {
      this[key] = media[key];
    });
  }

  /* youtube */

  getYouTubeId() {
    if (this.network === 'youtube') {
      const regexp = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;
      const match = regexp.exec(this.url);
      const ytId = match[5];
      return ytId;
    }
    return null;
  }

  getYouTubeThumb(quality = 'hq') {
    const ytId = this.getYouTubeId();
    if (ytId) {
      switch (quality) {
      case 'full':
        return `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
      case 'hq':
        return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
      case 'mq':
        return `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`;
      default:
        return null;
      }
    }
    return null;
  }

  getYouTubeEmbed(width = 350, height = 350) {
    const ytId = this.getYouTubeId();
    if (ytId) {
      return `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${ytId}?rel=0&amp;controls=1&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
    return null;
  }

  getTwitterId() {
    if (this.network === 'twitter') {
      const regexp = /https?:\/\/twitter.com\/[a-zA-Z_0-9]{1,20}\/status\/([0-9]*)/;
      const match = regexp.exec(this.url);
      const twitterId = match[1];
      return twitterId;
    }
    return null;
  }
}

/**
 * New validator to validate the schema
 */
// const validator = new Validator(schema);

/**
 * New object with proxy to control the setter and constructor
 */
/* const ProxyMedia = validator.generateProxy(SocialMedia);

export default ProxyMedia; */

export default SocialMedia;
