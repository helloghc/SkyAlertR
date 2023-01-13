/* eslint-disable-next-line */
import Schema from './schema';

/**
 * Super class to do composition over
 * all models
 * @class SuperClass
 */
export default class BaseModel {
  /**
   * Creates an instance of SuperClass.
   * @param {Schema} schema
   * @memberof SuperClass
   */
  constructor(schema, alias = 'model') {
    Object.defineProperty(this, 'schema', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: schema,
    });

    Object.defineProperty(this, 'alias', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: alias.toLowerCase(),
    });
  }

  /**
   * Get all attributes that can be edited
   * @returns Object
   * @memberof SuperClass
   */
  getEditable() {
    const attributes = this.schema.getAllEditable();
    const labels = this.schema.getAllLabels();

    return attributes.reduce((acc, current) => {
      const label = current.split('.');
      let name;

      if (label.length > 2) {
        const exists = (this[label[0]] && this[label[0]][label[1]]);
        name = (labels[current]) ? labels[current] : label[2];

        return {
          ...acc,
          [name]: {
            key: current,
            type: this.schema[label[0]][label[1]][label[2]].type,
            value: exists ? this[label[0]][label[1]][label[2]] : undefined,
            options: (exists && this.schema.hasEnum(this.schema[label[0]][label[1]][label[2]]))
              ?
              this.schema[label[0]][label[1]][label[2]].enumLabels
              || this.schema[label[0]][label[1]][label[2]].enum
              : undefined,
          },
        };
      }

      if (label.length > 1) {
        const exists = !!this[label[0]];
        name = (labels[current]) ? labels[current] : label[1];

        return {
          ...acc,
          [name]: {
            key: current,
            type: this.schema[label[0]][label[1]].type,
            value: exists ? this[label[0]][label[1]] : undefined,
            options: (exists && this.schema.hasEnum(this.schema[label[0]][label[1]]))
              ? this.schema[label[0]][label[1]].enumLabels || this.schema[label[0]][label[1]].enum
              : undefined,
          },

        };
      }

      if (label.length > 0) {
        name = labels[current] || label[0];

        return {
          ...acc,
          [name]: {
            key: current,
            type: this.schema[label[0]].type,
            value: this[label[0]],
            options: (this.schema.hasEnum(this.schema[label[0]]))
              ? this.schema[label[0]].enumLabels || this.schema[label[0]].enum
              : undefined,
          },
        };
      }

      return { ...acc };
    }, {});
  }

  /**
   * Saves de editable Object
   * @param {Object} editable
   * @memberof BaseModel
   */
  saveEditable(editable) {
    const labels = this.schema.getAllLabels();
    const labelKeys = Object.keys(labels);

    const getLabel = value => labelKeys.find(key => labels[key] === value);

    const save = (key, value) => {
      const keys = key.split('.');
      /* eslint-disable indent */
      switch (keys.length) {
        case 1:
          this[keys[0]] = value;
          break;

        case 2:
          if (this[keys[0]] === undefined) this[keys[0]] = {};
          this[keys[0]][keys[1]] = value;
          break;

        case 3:
          if (this[keys[0]] === undefined) this[keys[0]] = {};
          if (this[keys[0]][keys[1]] === undefined) this[keys[0]][keys[1]] = {};
          this[keys[0]][keys[1]][keys[2]] = value;
          break;

        default:
          console.error('Not a valid key');
          throw new Error('Not a valid key');
      }
      /* eslint-enable indent */
    };

    Object.keys(editable).forEach((key) => {
      const label = getLabel(key);

      if (key === labels[label]) {
        save(label, editable[key].value);
      }
    });

    return this;
  }
}
