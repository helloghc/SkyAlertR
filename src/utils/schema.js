// TODO: Refactor some code

import ERRORS from './errors';

/**
 * Every valid options to create an Schema object
 */
const SCHEMA_OPTIONS = {
  type: [Boolean, Date, Number, String, Array],
  required: Boolean,
  enum: [],
  editable: Boolean,
  label: String,
  enumLabels: Array,
};

/**
 * Check constructrors
 * @param {String} att
 * @param {constructor} type
 */
const checkConstructor = (att, type) => {
  if (att.constructor !== type) {
    throw ERRORS.not_valid_typo(att, type);
  }
};

/**
 * Looks if the schema object is empty
 * @param {Object} [param]
 * @returns {Object}
 */
const checkParam = (param = {}) => {
  if (Object.prototype.toString.call(param) !== '[object Object]') {
    throw ERRORS.not_valid_typo('Schema', 'Object', 'The Schema must be an Object');
  }

  if (Object.keys(param).length === 0) {
    throw ERRORS.empty_object('Schema constructor cannot be empty');
  }

  return { ...param };
};

/**
 * @param {Object} model
 * @param {Object} object
 * @returns {Object} santizied
 */
const checkSchema = (schema = {}) => {
  /* eslint-disable-next-line */
  if (schema.constructor === Schema) {
    return { ...schema };
  }

  if (Object.prototype.toString.call(schema) !== '[object Object]') {
    throw ERRORS.not_valid_typo('Schema', 'Object');
  }

  if (Object.keys(schema).length === 0) {
    throw ERRORS.empty_object('Schema object cannot be empty. At least must have "type" attribute');
  }

  if (!schema.type) throw ERRORS.att_required('type');

  return { ...schema };
};

/**
 * Check the delivered schema against his options
 * @param {object} schema
 * @returns [schema]
 */
const checkSchemaOptions = (schema = {}) => {
  Object.keys(schema).forEach((key) => {
    /* eslint-disable-next-line */
    if (schema[key].constructor === Schema || (schema[key].constructor === Object
      && Object.keys(schema[key]).length > 0)) {
      return;
    }

    /* eslint-disable indent */
    switch (key) {
      case 'type':
        if (!SCHEMA_OPTIONS[key].includes(schema[key])) {
          const value = schema[key].toString().match(/[A-Z][a-z]+/g)[0];
          const arr = SCHEMA_OPTIONS[key].map(type => type.toString().match(/[A-Z][a-z]+/g)[0]);

          throw ERRORS.not_in_enum(key, value, arr);
        }
        break;

      case 'required':
        checkConstructor(schema[key], SCHEMA_OPTIONS[key]);
        break;

      case 'label':
        checkConstructor(schema[key], SCHEMA_OPTIONS[key]);
        break;

      case 'editable':
        checkConstructor(schema[key], SCHEMA_OPTIONS[key]);
        break;

      case 'enum':
        if (!Array.isArray(schema[key])) throw ERRORS.not_valid_typo(schema[key], Array);

        schema[key].forEach((element) => {
          if (element.constructor !== schema.type) {
            const msg = `${element.constructor.toString().match(/[A-Z][a-z]+/g)[0]} given, must be ${schema.type.toString().match(/[A-Z][a-z]+/g)[0]}`;
            throw ERRORS.not_valid_typo(element, schema.type, msg);
          }
        });
        break;

      case 'enumLabels':
        checkConstructor(schema[key], SCHEMA_OPTIONS[key]);
        break;
      /* eslint-enable indent */

      /* eslint-disable  */
      default:

        if (schema[key].constructor !== Object && !schema[key].type) {
          throw ERRORS.att_not_valid(key, `${key} is not a valid options for Schema Object`);
        }

        let nestedObject = { ...schema[key] };

        nestedObject = checkSchemaOptions(checkSchema(nestedObject));

        schema[key] = { ...nestedObject };
        break;
      /* eslint-enable */
    }
  });

  return { ...schema };
};


/**
 * Manage an Schema to validate every Model instance
 * @class Schema
 */
/* eslint-disable class-methods-use-this */
export default class Schema {
  /**
   * Creates an instance of Schema.
   * @param {Object} [schema]
   * @memberof Schema
   */
  constructor(schema = {}) {
    const sanitized = checkParam(schema);

    Object.keys(sanitized).forEach((key) => {
      this[key] = checkSchemaOptions(checkSchema(sanitized[key]));

      this[key].required = this[key].required || false;
    });
  }

  /**
   * Returns true if the given key are in
   * the Schema
   * @param {String} key
   * @returns Boolean
   * @memberof Schema
   */
  attributeInSchema(key) {
    return Object.keys(this).includes(key);
  }

  /**
   * Return true if the Schema attribute is
   * a nested object
   * @param {Any} attr Could be a String or an Object
   * @returns Boolean
   * @memberof Schema
   */
  isNestedSchema(attr) {
    if (attr.constructor === Object) {
      return (!('type' in attr) || attr.type.constructor === Object);
    }
    return (!('type' in this[attr]) || this[attr].type.constructor === Object);
  }

  /**
   * Return all the options of the given entry
   * @param {any} key
   * @returns Object
   * @memberof Schema
   */
  getAttribute(key) {
    return (this.attributeInSchema(key)) ? { ...this[key] } : undefined;
  }

  /**
   * Returns the value of required option in
   * attribute
   * @param {Any} attr Attribute to look for required option. Could be String or Object
   * @returns Boolean
   * @memberof Schema
   */
  isEditable(attr) {
    if (attr.constructor === Object) {
      return ('editable' in attr && attr.editable);
    }

    return this[attr].editable;
  }

  /**
   * Get all nested attributes who are editable
   * @param {Object} attr Object to extract the values
   * @param {String} name Name(key) of the Object
   * @returns Array
   * @memberof Schema
   */
  getNestedEditable(attr, name, nested) {
    return Object.keys(attr).reduce((acc, key) => {
      if (['required', 'editable'].includes(key)) return [...acc];

      if (!('type' in attr[key])) {
        return [...acc, ...this.getNestedEditable(attr[key], name, key)];
      }

      if (this.isEditable(attr[key])) return [...acc, (!nested) ? `${name}.${key}` : `${name}.${nested}.${key}`];

      return [...acc];
    }, []);
  }

  /**
   * Get all attributes that can be edited
   * @returns Array
   * @memberof Schema
   */
  getAllEditable() {
    return Object.keys(this)
      .reduce((acc, key) => {
        if (this.isNestedSchema(key)) {
          return [...acc, ...this.getNestedEditable(this[key], key)];
        }

        if (this.isEditable(key)) {
          return [...acc, key];
        }

        return [...acc];
      }, []);
  }

  /**
   * Get label for the given object
   * If the attribute doesn't have a label
   * it return false;
   * @param {Any} attr Attribute to look for required option. Could be String or Object
   * @returns String or Boolean
   * @memberof Schema
   */
  getLabel(attr) {
    const nested = this.isNestedSchema(attr);

    if (attr.constructor === Object && !nested) {
      return ('label' in attr) ? attr.label : undefined;
    }

    if (nested) {
      this.getLabel(attr);
    }

    return this[attr].label;
  }

  /**
 * Get all nested labels an returns as an Object
 * @param {Object} attr Object to extract the labels
 * @param {String} name Name(key) of the Object
 * @param {String} nested Second key to go through second layer of the object
 * @returns Object
 * @memberof Schema
 */
  getNestedLabels(attr, name, nested = undefined) {
    return Object.keys(attr).reduce((acc, key) => {
      if (['required', 'editable'].includes(key)) return { ...acc };

      if (this.isNestedSchema(attr[key])) {
        return { ...acc, ...this.getNestedLabels(attr[key], name, key) };
      }

      const label = this.getLabel(attr[key]);
      if (label) {
        return { ...acc, [(!nested) ? `${name}.${key}` : `${name}.${nested}.${key}`]: label };
      }

      return { ...acc };
    }, {});
  }

  /**
   * Get all labels from the attributes in the
   * Schema
   * @returns Object
   * @memberof Schema
   */
  getAllLabels() {
    return Object.keys(this).reduce((acc, key) => {
      if (this.isNestedSchema(this[key])) {
        const nested = { ...this.getNestedLabels(this[key], key) };
        return (nested) ? { ...acc, ...nested } : { ...acc };
      }

      const label = this.getLabel(this[key]);
      if (label) {
        return { ...acc, [key]: label };
      }

      return { ...acc };
    }, {});
  }

  /**
   * Returns the value in required option
   * @param {Object} attr Could be Object or String
   * @returns Boolean
   * @memberof Schema
   */
  isRequired(attr) {
    if (attr.constructor === Object) {
      return ('required' in attr) ? attr.required : false;
    }

    return this[attr].required;
  }

  /**
  * Get all nested required an returns as an Array
  * @param {Object} attr Object to extract the labels
  * @param {String} name Name(key) of the Object
  * @param {String} nested Second key to go through second layer of the object
  * @returns Array
  * @memberof Schema
  */
  getNestedRequired(attr, name, nested = undefined) {
    return Object.keys(attr).reduce((acc, key) => {
      if (['required', 'editable'].includes(key)) return [...acc];

      if (this.isNestedSchema(attr[key])) {
        return [...acc, ...this.getNestedRequired(attr[key], name, key)];
      }

      if (this.isRequired(attr[key])) {
        return [...acc, (!nested) ? `${name}.${key}` : `${name}.${nested}.${key}`];
      }

      return [...acc];
    }, []);
  }

  /**
   * Returns all the attributes that required
   * are true. If no there's not, return an Empty Array
   * @returns Array
   * @memberof Schema
   */
  getAllRequired() {
    return Object.keys(this)
      .reduce((acc, key) => {
        if (this.isNestedSchema(key)) {
          const nested = this.getNestedRequired(this[key], key);

          if (nested.length > 0) return [...acc, ...nested];
        }

        if (this.isRequired(key)) {
          return [...acc, key];
        }

        return [...acc];
      }, []);
  }

  /**
   * Get the type of an attribute
   * If invalid attribute, it returns undefined
   * @param {any} attr Could be String or an Object
   * @returns Constructor
   * @memberof Schema
   */
  getType(attr) {
    if (attr.constructor === Object) {
      return ('type' in attr) ? attr.type : undefined;
    }

    return this[attr].type;
  }

  /**
  * Get all nested types and returns as an Object
  * @param {Object} attr Object to extract the labels
  * @param {String} name Name(key) of the Object
  * @param {String} nested Second key to go through second layer of the object
  * @returns Object
  * @memberof Schema
  */
  getNestedTypes(attr, name, nested = undefined) {
    return Object.keys(attr).reduce((acc, key) => {
      if (['required', 'editable'].includes(key)) return { ...acc };

      if (this.isNestedSchema(attr[key])) {
        return { ...acc, ...this.getNestedTypes(attr[key], name, key) };
      }

      const type = this.getType(attr[key]);
      if (type) {
        return { ...acc, [(!nested) ? `${name}.${key}` : `${name}.${nested}.${key}`]: type };
      }

      return { ...acc };
    }, {});
  }

  /**
   * Returns an Object with key/value for
   * each attribute and his type value.
   * @returns Object
   * @memberof Schema
   */
  getAllTypes() {
    return Object.keys(this).reduce((acc, key) => {
      if (this.isNestedSchema(this[key])) {
        const nested = { ...this.getNestedTypes(this[key], key) };
        return (nested) ? { ...acc, ...nested } : { ...acc };
      }

      const type = this.getType(this[key]);
      if (type) {
        return { ...acc, [key]: type };
      }

      return { ...acc };
    }, {});
  }

  /**
   * Returns true if the attribute has an enum option
   * defined
   * @param {Any} attr Could be String or Object
   * @returns Boolean
   * @memberof Schema
   */
  hasEnum(attr) {
    if (attr.constructor === Object) {
      return ('enum' in attr);
    }

    return ('enum' in this[attr]);
  }

  /**
   * Return the specified enum option of the
   * attribute given. If doesnt have, return undefined
   * @param {Any} attr Could be String or Object
   * @returns Array or Undefined
   * @memberof Schema
   */
  getEnum(attr) {
    if (attr.constructor === Object) {
      return (this.hasEnum(attr)) ? [...attr.enum] : undefined;
    }

    return ('enum' in this[attr]) ? [...this[attr].enum] : undefined;
  }

  /**
   * Return an object with all attributes an options.
   * Functions are ignored;
   * @returns Object
   * @memberof Schema
   */
  getAllAtributes() {
    return Object.keys(this).reduce((acc, key) => {
      if (this[key].constructor !== Function) {
        return { ...acc, [key]: this.getAttribute(key) };
      }

      return { ...acc };
    }, {});
  }
}
