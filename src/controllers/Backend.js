
/* eslint no-alert: 0 */
/* eslint max-len: 0 */
import SkyAlertAPI from './SkyAlertAPI';
import secret from '../config/secret';

const IS_PRODUCTION = true;

class Backend {
  constructor() {
    if (!Backend.instance) {
      this.commonAPI = SkyAlertAPI.init(IS_PRODUCTION ? secret : {});
      this.callback = [];
      Backend.instance = this;
    }

    return Backend.instance;
  }


  static init() {
    return new Backend();
  }

  async didLogin() {
    this.callback.forEach(listener => (listener.listenToAuthorization ? listener.listenToAuthorization(true) : null));
  }

}

export default Backend;
