import Validator from '../utils/validator';
import Schema from '../utils/schema';
import BaseModel from '../utils/basemodel';

/**
 * @const
 * Schema to validate Tag class
 */
const schema = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    editable: true,
    label: 'Nombre',
  },
  category: {
    type: String,
    editable: true,
    label: 'Categoría',
  },
  active: {
    type: Boolean,
    editable: true,
    label: '¿Activa?',
  },
  updatedAt: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  __v: {
    type: Number,
  },
});

/**
 * @class Tag
 */
class Tag extends BaseModel {
  /**
   * Creates an instance of Tag.
   * @param {Object} tag
   * @memberof Tag
   */
  constructor(tag) {
    super(schema);
    Object.keys(tag).forEach((key) => {
      this[key] = tag[key];
    });
  }
}

/**
 * New validator to validate the Schema
 */
// const validator = new Validator(schema);

/**
 * New object with proxy to control the setter and constructor
 */
/* const ProxyTag = validator.generateProxy(Tag);

export default ProxyTag; */

export default Tag;
