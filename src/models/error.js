import Validator from '../utils/validator';
import Schema from '../utils/schema';

/**
 * @constant {Array} with the posible values for Error.code attribute
 */
const ERROR_CODES = [
  'invalid_params',
  'invalid_fields',
  'not_found',
  'empty_user',
  'expired_token',
  'db_duplicate_key',
  'db_error',
  'forbidden',
  'model_validation',
  'fatal',
  'survey_closed',
  'missing_fields',
];

/**
 * Object with the posible values for Error.code attribute
 */
export const CODES = {
  PARAMS: ERROR_CODES[0],
  FIELDS: ERROR_CODES[1],
  NOT_FOUND: ERROR_CODES[2],
  EMPTY_USER: ERROR_CODES[3],
  EXPIRED_TOKEN: ERROR_CODES[4],
  DUPLICATE_KEY: ERROR_CODES[5],
  DB_ERROR: ERROR_CODES[6],
  FORBIDDEN: ERROR_CODES[7],
  MODEL: ERROR_CODES[8],
  FATAL: ERROR_CODES[9],
};

/**
 * Returns a friendly error
 * @param {any} error
 * @returns Error
 */
export const getError = (error) => {
  /* eslint-disable-next-line */
  if (error.constructor !== _Error) return error;

  const pretty = error.getPrettyError();
  const { code } = pretty;
  /* eslint-disable indent */
  switch (code) {
    case CODES.EXPIRED_TOKEN:
      return new Error('Refresh token expired, must log in again');

    case CODES.PARAMS:
      return new Error(`Invalid Params: ${pretty.params}`);

    case CODES.NOT_FOUND:
      return new Error(`Source not found, missing: ${pretty.missing}`);

    case CODES.FIELDS:
      return new Error(`Invalid Fields: ${pretty.fields}`);

    case CODES.EMPTY_USER:
      return new Error(`User are empty: ${pretty.userSource}`);

    case CODES.MODEL:
      return new Error(`Model Validation: ${pretty.details}`);

    default:
      return new Error(`${code}, message: ${pretty.message || 'no message'}`);
  }
  /* eslint-enable indent */
};

/**
 * Schema to validate the class
 */
const schema = new Schema({
  code: {
    type: String,
    enum: ERROR_CODES,
  },
  message: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  rawError: new Schema({
    description: {
      type: String,
    },
  }),
  details: new Schema({
    params: {
      type: Array,
    },
    fields: {
      type: Array,
    },
    missing: {
      type: String,
    },
    userSource: {
      type: String,
    },
  }),
});

/**
 * @class Error
 */
class _Error {
  /**
   * Creates an instance of Error.
   * @param {Object} error
   * @memberof Error
   */
  constructor(error) {
    Object.keys(error).forEach((key) => {
      this[key] = error[key];
    });
  }

  /**
   * Return a simplier error object
   * @returns Object
   * @memberof _Error
   */
  /* eslint-disable indent */
  getPrettyError() {
    switch (this.code) {
      case 'invalid_fields':
        return this.getInvalidFields();

      case 'invalid_params':
        return this.getInvalidParams();

      case 'not_found':
        return this.getNotFound();

      case 'empty_user':
        return this.getEmptyUser();

      case 'model_validation':
        return this.getModelValidation();

      default:
        return { code: this.code, message: this.message || this.errorMessage };
    }
    /* eslint-enable indent */
  }

  /**
   * Return a plain object with code "invalid_fields"
   * and an Array of invalid fields
   * @returns Object
   * @memberof _Error
   */
  getInvalidFields() {
    if (this.code !== 'invalid_fields') return false;

    return { code: this.code, fields: this.details.fields.map(element => Object.keys(element)) };
  }

  /**
   * Return a plain object with code "invalid_params"
   * and an Array of invalid params
   * @returns Object
   * @memberof _Error
   */
  getInvalidParams() {
    if (this.code !== 'invalid_params') return false;

    return { code: this.code, params: this.details.params.map(element => Object.keys(element)) };
  }

  /**
   * Return a plain object with code "not_found"
   * and a missing string
   * @returns Object
   * @memberof _Error
   */
  getNotFound() {
    if (this.code !== 'not_found') return false;

    return { code: this.code, missing: this.details.missing };
  }

  /**
   * Return a plain object with code "empty_user"
   * and a userSource string
   * @returns Object
   * @memberof _Error
   */
  getEmptyUser() {
    if (this.code !== 'empty_user') return false;

    return { code: this.code, userSource: this.details.userSource };
  }

  /**
   * Return a plain object with code "model_validation"
   * and all errors as an object
   * @returns Object
   * @memberof _Error
   */
  getModelValidation() {
    if (this.code !== 'model_validation') return false;

    return {
      code: this.code,
      details: [Object.keys(this.details).reduce((acc, curr) => `${acc} ${this.details[curr].message}, `, '')],
    };
  }
}

/**
 * New validator to validate the schema
 */
// const validator = new Validator(schema);

/**
 * New object with proxy to control the setter and constructor
 */
/* const ProxyError = validator.generateProxy(_Error);

export default ProxyError; */

export default _Error;
