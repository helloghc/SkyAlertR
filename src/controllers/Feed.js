import SkyAlertAPI from './SkyAlertAPI';
import Article from '../models/article';

/**
 * Class to get all Articles
 * tasks
 * @class FeedController
 */
class FeedController {
  /**
   * Creates an instance of FeedController.
   * @param {Function} onReload
   * @memberof FeedController
   */
  constructor(onReload) {
    if (!FeedController.instance) {
      this.api = SkyAlertAPI.init();
      this.onReload = onReload || null;
      FeedController.instance = this;
    }

    return FeedController.instance;
  }

  /**
   * Creates an instance of FeedController.
   * @memberof FeedController
   */
  static init(onReload) {
    return new FeedController(onReload);
  }

  /**
   * Sets the state the user is currently in
   * @param {String} State
   * @memberof FeedController
  */
  /* setUserState(state) {
    }
   */

  /**
   * Sets the tags that the user is currently interested in
   * @param {Array} Tags
   * @memberof FeedController
   */
  setUserFilters(tags) {
    this.tags = tags;

    if (this.onReload) return this.onReload();

    return true;
  }

  /**
   * Get feed page using the tags that belongs to the object
   * to filter the feed;
   * @param {Number} number
   * @returns {Object} { page: number, total: number, articles: array }
   * @memberof FeedController
   */
  async getPage(number) {
    try {
      const { page, data, total } = await this.api.getFeed(number, 12, this.tags);
      return {
        page,
        total,
        articles: data.articles.map(item => new Article(item)),
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Loads the Initial PageResult
   * @returns PageResult
   * @memberof FeedController
   */
  async reload() {
    this.currentPage = 1;

    const { page, articles, total } = await this.getPage(this.currentPage);
    this.feedArticles = articles;

    const pageResult = {
      currentPage: page,
      total,
      page: articles,
      feed: this.feedArticles,
    };

    return pageResult;
  }

  /**
   * Loads the Next PageResult
   * @returns PageResult
   * @memberof FeedController
   */
  async getNextPage() {
    this.currentPage += 1;

    const { page, articles, total } = await this.getPage(this.currentPage);

    if (!articles.length) throw new Error('No more articles to display');

    this.feedArticles.push(...articles);

    const pageResult = {
      currentPage: page,
      total,
      page: articles,
      feed: this.feedArticles,
    };

    return pageResult;
  }
}

export default FeedController;