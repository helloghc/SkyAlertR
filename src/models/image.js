import Schema from '../utils/schema';
import BaseModel from '../utils/basemodel';
import SkyAlertAPI from '../controllers/SkyAlertAPI';

/**
 * @const
 * Array of image types
 */
const TYPES = ['Image', 'SocialMedia', 'Video'];
const TYPELABELS = ['Imagen', 'Social Media', 'Video'];

/**
 * @const
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
    enum: TYPES,
    editable: true,
    label: 'Tipo (Seleccionar "imagen")',
    enumLabels: TYPES.map((role, index) => ({ value: TYPES[index], text: TYPELABELS[index] })),
  },
  _searchText: {
    type: String,
  },
  description: {
    type: String,
    editable: true,
    label: 'Descripción',
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
        type: Number,
      },
      height: {
        type: Number,
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
});


/**
 * @class Image
 */
class Image extends BaseModel {
  /**
   * Creates an instance of Image.
   * @param {Object} image
   * @memberof Image
   */
  constructor(image) {
    super(schema, 'image');
    try{
    Object.keys(image).forEach((key) => {
      this[key] = image[key];
    });
    }catch(error){
      console.error(error)
    }
  }

  /**
   * Returns a URL to the pic
   * of the image
   * @returns String
   * @memberof Image
   */
  getPic() {
    const id = this.id || this._id;

    if (!id) return null;

    return SkyAlertAPI.getPicURL(id, this.alias);
  }

  /**
   * Returns a URL to the thumbnail
   * of the image
   * @returns String
   * @memberof Image
   */
  getThumb() {
    const id = this.id || this._id;

    if (!id) return null;

    return SkyAlertAPI.getThumbURL(id, this.alias);
  }
}

/**
 * New validator to validate the Schema
 */
// const validator = new Validator(schema);

/**
 * New object with proxy to control the setter and constructor
 */
/* const ProxyImage = validator.generateProxy(Image);

export default ProxyImage; */

export default Image;
