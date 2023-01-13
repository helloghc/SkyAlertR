
import SkyAlertAPI from './SkyAlertAPI';

class Config {
  constructor() {
    if (!Config.instance) {
      this.tags = null;
      this.tagCategories = null;
      Config.instance = this;
    }

    return Config.instance;
  }

  static init() {
    return new Config();
  }

  async load() {
    if (!this.tags || !this.tagCategories) {
      const api = SkyAlertAPI.init();
      const { tags } = await api.getTags();
      const { tagCategories } = await api.getTagCategories();
      this.tags = tags;
      this.tagCategories = tagCategories;
    }

    return { tags: this.tags, tagCategories: this.tagCategories };
  }

  async getTags() {
    if (this.tags) {
      return this.tags;
    }

    try {
      await this.load();
      return this.tags;
    } catch (error) {
      throw new Error('Could not get tags');
    }
  }

  async getTagCategories() {
    if (this.tagCategories) {
      return this.tagCategories;
    }

    try {
      await this.load();
      return this.tagCategories;
    } catch (error) {
      throw new Error('Could not get tagCategories');
    }
  }
}

export default Config;
