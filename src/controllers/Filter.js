import { getError } from '../models/error';
import Tag from '../models/tag';
import TagCategory from '../models/tagCategory';
import Config from './Config';

/**
 * Group the tags by category
 * @param {Array} tags
 * @param {Array} categories
 * @returns Object
 */
const groupByCategories = (tags, categories) =>
  categories.reduce((acc, category) => {
    const tagCategory = new TagCategory(category);

    tagCategory.tags = tags.filter((tag) => {
      if (tag.category === category._id) return tag;

      return null;
    }).map((tag) => {
      const tagObject = new Tag(tag);

      return { id: tagObject._id, name: tagObject.name };
    });

    return [
      ...acc,
      {
        id: tagCategory._id,
        name: tagCategory.name,
        slug: tagCategory.slug,
        tags: tagCategory.tags,
      },
    ];
  }, []);

/**
 * Filter Class to manage Tags and Tags Categories
 * @export @default
 * @class Filter
 */
export default class Filter {
  /**
   * Creates an instance of Filter.
   * @memberof Filter
   */
  constructor() {
    if (!Filter.instance) {
      Filter.instance = this;
    }

    return Filter.instance;
  }

  /**
   * Initialize Filter Controller
   * @static
   * @returns {Filter} instance
   * @memberof Filter
   */
  static init() {
    return new Filter();
  }

  /**
  * Initialize the Class attributes
  * @memberof Filter
  */
  async load() {
    if (this.tagCategories) return this.tagCategories;
    try {
      await this._fetchTags();
      return this.tagCategories;
    } catch (error) {
      const e = getError(error);
      console.warn(e);
      throw e;
    }
  }

  /**
   * Get tag categories with all the tags ordered by category
   * @returns {Array} categories
   * @memberof Filter
   */
  async getTagsCategories() {
    try {
      const categories = this.tagCategories || await this.load();
      return categories;
    } catch (error) {
      const e = getError(error);
      console.warn(e);
      throw e;
    }
  }

  /**
   * Returns TagCategories as an Array
   * @returns {Array} categories
   * @memberof Filter
   */
  async getCategoriesAsArray() {
    console.warn('Warning! Instead of "getCategoriesAsArray", use just "getTagCategories"');
    try {
      const categories = this.tagCategories || await this.load();
      return categories;
    } catch (error) {
      const e = getError(error);
      console.warn(e);
      throw e;
    }
  }

  /**
   * Fetch the tags from the endpoint
   * @memberof Filter
   */
  async _fetchTags() {
    try {
      const { tags, tagCategories } = await Config.init().load();

      this.tagCategories = groupByCategories(tags, tagCategories);
    } catch (error) {
      console.warn(error);
      throw getError(error);
    }
  }

  /**
   * Returns all the tags of one category
   * by the ID. If not found, returns undefined.
   * @param {String} id
   * @returns Array
   * @memberof Filter
   */
  getTagsByCategory(id) {
    if (!id || id.constructor !== String) throw getError(new Error('id param is required. Must be a String'));

    const tags = this.tagCategories
      .filter(tagCategory => id === tagCategory.id)
      .reduce((acc, tagCategory) => [...acc, ...tagCategory.tags], []);

    return (tags.length === 0) ? undefined : tags;
  }

  /**
   * Returns a Tag Category Object
   * by ID
   * @param {String} id
   * @returns TagCategory
   * @memberof Filter
   */
  getTagCategory(id) {
    if (!id || id.constructor !== String) throw getError(new Error('id param is required. Must be a String'));

    const category = this.tagCategories
      .filter(tagCategory => id === tagCategory.id)
      .reduce((acc, tagCategory) => new TagCategory(tagCategory), {});

    return (Object.keys(category).length > 0) ? category : undefined;
  }
}
