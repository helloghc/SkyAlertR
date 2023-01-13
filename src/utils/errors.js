/**
* Error's object
* Manage every single error to throw
*/
const ERRORS = {
  att_not_valid: (key, message = `"${key}" attribute is not valid.`) => new Error(message),

  not_in_enum: (key, value, array, message = `"${key}" value is not valid -` +
    ` Given: ${value} - Must be one of: [ ${array.map(element => ` ${element}`)} ]`) => new Error(message),

  att_required: (att, message = `"${att}" attribute is required`) => new ReferenceError(message),

  emtpy_param: (param = 'Param', message = `${param} required`) => new ReferenceError(message),

  not_valid_typo: (att, typo, message = `${att} must be ${typo}`) => new TypeError(message),

  empty_object: (message = 'Object cannot be empty') => new Error(message),

  empty_model: () => new Error('Model param required'),

  obj_not_editable: (key, message = `${key} is no editable`) => new Error(message),
};

export default ERRORS;
