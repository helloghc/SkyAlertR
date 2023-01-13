import Validator from '../utils/validator';
import Schema from '../utils/schema';
import BaseModel from '../utils/basemodel';

/**
 * @const
 * Schema to validate TagCategory class
 */
const schema = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  canFilter: {
    type: Boolean,
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
  tags: {
    type: Array,
  },
});

/**
 * @class TagCategory
 */
class TagCategory extends BaseModel {
  /**
   * Creates an instance of TagCategory.
   * @param {Object} tagCategory
   * @memberof TagCategory
   */
  constructor(tagCategory) {
    super(schema);
    Object.keys(tagCategory).forEach((key) => {
      this[key] = tagCategory[key];
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
/* const ProxyTagCategory = validator.generateProxy(TagCategory);

export default ProxyTagCategory; */

export default TagCategory;
