// TODO: Implement construct and setter in nested Schemas
// TODO: Make a self proxy implementer
// TODO: Refactor to use Schema Methods

import Schema from './schema';
import ERRORS from './errors';

/**
 * Looks at the schema param and validate
 * @param {any} schema
 * @returns
 */
const checkSchema = (schema) => {
  if (Object.keys(schema).length === 0) throw ERRORS.emtpy_param('Schema param');
  if (!(schema instanceof Schema)) throw ERRORS.not_valid_typo('param', 'Schema Object');

  return schema;
};

/**
 * Checks if the param given are not empty and
 * is an Object type
 * @param {any} param
 * @returns
 */
const checkParams = (param) => {
  if (!param) throw ERRORS.emtpy_param('Data', 'Constructor input cannot be emtpy');
  if (param.constructor !== Object) throw ERRORS.not_valid_typo('Param', 'Object');

  return param;
};

/**
 * Creates a Handler to use in a Proxy constructor
 * @param {Validator} validator
 * @returns Handler Object
 */
const createHandler = (validator) => {
  const setter = {
    set(target, key, value) {
      validator.attributeInSchema(key);

      if (value === undefined) return true;
      if (target[key] === undefined || target[key].constructor !== Object) {
        Object.assign(target, { [key]: validator.validateValue(value, key) });
      }

      Object.assign(target, { [key]: validator.validateValue(value, key) });

      return true;
    },
  };

  const construct = {
    construct(Target, args) {
      const obj = checkParams(args[0]);

      const schema = { ...validator.schema };

      Object.keys(schema).forEach((key) => {
        if (schema[key].required && (!(key in obj) || obj[key] === undefined)) {
          throw ERRORS.att_required(key);
        }
      });

      Object.keys(obj).forEach((key) => {
        if (obj[key].constructor === Object && Object.keys(obj[key]).length > 0) {
          validator.attributeInSchema(key);
          return;
        }

        validator.validateValue(obj[key], key);
      });

      return new Proxy(new Target(...args), setter);
    },
  };

  return construct;
};

/**
 * Validate the given data against the schema given as argument
 * in the constructor
 * @class Validator
 */
class Validator {
  /**
   * Creates an instance of Validator.
   * @param {Schema} [schema]
   * @memberof Validator
   */
  constructor(schema = {}) {
    this.schema = checkSchema(schema);
  }

  /**
   * Validate that the property are in the schema
   * @param {any} key
   * @memberof Validator
   */
  attributeInSchema(key) {
    if (!(key in this.schema)) {
      throw ERRORS.att_not_valid(key);
    }
  }

  /**
   * Check if the value has the same type that the Schema type
   * and looks if are include in the given array in the Schema enum property
   * @param {any} key
   * @param {any} input
   * @memberof Validator this.schema[key].hasOwnProperty('enum')
   */
  valueInEnum(key, input) {
    if (!('enum' in this.schema[key])) {
      throw ERRORS.att_not_valid(key, `${key} has not attribute 'enum'`);
    }

    this.validateType(key, input);

    if (!this.schema[key].enum.includes(input)) {
      throw ERRORS.not_in_enum(key, input, this.schema[key].enum);
    }

    return input;
  }

  /**
   * Look if the property is required
   * @param {any} key
   * @returns Boolean
   * @memberof Validator
   */
  valueRequired(key) {
    return this.schema[key].required;
  }

  /**
   * Looks if property could be editable
   * @param {any} key
   * @returns Boolean
   * @memberof Validator
   */
  valueEditable(key) {
    return this.schema[key].editable;
  }

  /**
   * Looks if enum property are in attribute
   * @param {any} key
   * @returns Boolean
   * @memberof Validator
   */
  isEnumInAttribute(key) {
    return ('enum' in this.schema[key]);
  }

  /**
 * Return every attribute key who could be
 * editable
 * @returns Array
 * @memberof Validator
 */
  getEditables() {
    return Object.keys(this.schema).reduce((accum, key) => {
      if (this.schema[key].editable) {
        accum.concat(key);
      }

      return accum;
    }, []);
  }

  /**
   * Returns true if the attribute with the given key is Object type
   * @param {any} key
   * @returns Boolean
   * @memberof Validator
   */
  valueIsObject(key) {
    return (this.schema[key].type === Object);
  }

  /**
   * Validate the value give it against
   * rules specified in Schema object
   * @param {any} value
   * @param {any} key
   * @param {Boolean} isConstruct
   * @returns value
   * @memberof Validator
   */
  validateValue(value, key) {
    this.attributeInSchema(key);

    /**
     * TODO: La validacion debe ser mas inteligente
     * Es necesario verificar si es un Array, no este vacio
     * Si es un string, no este vacio
     * o Undefined para ambos casos
     * Esto, cuando son requeridos.
     */
    if (this.valueRequired(key) && (value === undefined || value.length === 0)) {
      throw ERRORS.att_required(key);
    }

    this.validateType(key, value);

    if (this.isEnumInAttribute(key)) {
      this.valueInEnum(key, value);
    }

    return value;
  }

  /**
   * Validate the value against the typo given in the schema for the attribute
   * @param {any} key
   * @param {any} input
   * @memberof Validator
   */
  validateType(key, input) {
    if (this.schema.isNestedSchema(key)) return input;

    if (input.constructor !== this.schema[key].type && Object.keys(this.schema[key]).includes('type')) {
      const type = this.schema[key].type.toString().match(/[A-Z][a-z]+/g)[0];

      throw ERRORS.not_valid_typo(key, type);
    }

    return input;
  }


  /**
   * Create and apply a proxy to an object using the current
   * schema when the validator was created
   * @param {any} object
   * @returns newObjectWithProxy
   * @memberof Validator
   */
  generateProxy(object) {
    if (!object) throw ERRORS.emtpy_param('Object or Class');

    const handler = createHandler(this);

    const withProxy = new Proxy(object, handler);

    return withProxy;
  }
}

export default Validator;
