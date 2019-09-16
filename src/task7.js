export const getFibonacci = function getFibonacciNumber(context) {
  try {
    if (context === undefined) {
      throw {
        status: 'failure',
        reason: 'The parameter is empty. Please enter valid parameter.',
      }
    }

    if (typeof context !== 'object') {
      throw {
        status: 'failure',
        reason: 'The parameter has to be an object. Please enter valid parameter.',
      }
    }

    if (Object.prototype.hasOwnProperty.call(context, 'length')
      && (
        Object.prototype.hasOwnProperty.call(context, 'min')
        || Object.prototype.hasOwnProperty.call(context, 'max')
      )
    ) {
      throw {
        status: 'failure',
        reason: 'The object \'context\' has to have either \'max\' and \'min\' properties or only \'length\' property. Please enter valid parameter.',
      }
    }

    if (
      Object.prototype.hasOwnProperty.call(context, 'length')
      && !Object.prototype.hasOwnProperty.call(context, 'min')
      && !Object.prototype.hasOwnProperty.call(context, 'max')
    ) {
      if (context.length <= 0 || isNaN(context.length)) {
        throw {
          status: 'failure',
          reason: 'The \'length\' property has to be more or equal than 0. Please enter valid parameter.',
        }
      }

      if (context.length >= Number.MAX_SAFE_INTEGER.toString().length) {
        throw {
          status: 'failure',
          reason: `The \'length\' property has to be less or equal than ${Number.MAX_SAFE_INTEGER.toString().length - 1} symbols. Please enter valid parameter.`,
        }
      }
    }

    if (
      !Object.prototype.hasOwnProperty.call(context, 'length')
      && (
        !Object.prototype.hasOwnProperty.call(context, 'min')
        || !Object.prototype.hasOwnProperty.call(context, 'max')
      )
    ) {
      throw {
        status: 'failure',
        reason: 'The \'min\' and \'max\' properties have to be both. Please enter valid parameters.',
      }
    }

    if (
      !Object.prototype.hasOwnProperty.call(context, 'length')
      && Object.prototype.hasOwnProperty.call(context, 'min')
      && Object.prototype.hasOwnProperty.call(context, 'max')
    ) {
      if (context.min < 0 || context.max < 0 || isNaN(context.min) || isNaN(context.max)) {
        throw {
          status: 'failure',
          reason: 'The \'min\' and \'max\' properties have to be more or equal than 0. Please enter valid parameters.',
        }
      }

      if (context.min > 9007199254740991 || context.max > 9007199254740991) {
        throw {
          status: 'failure',
          reason: 'The \'min\' and \'max\' properties have to be less or equal than 9,007,199,254,740,991 (2^53 - 1). Please enter valid parameters.',
        }
      }

      if (context.min > context.max) {
        throw {
          status: 'failure',
          reason: 'The \'min\' property has to be less than \'max\' one. Please enter valid parameters.',
        }
      }
    }

    let previous = 0;
    let current = 1;
    let next = 0;
    let result = [];

    if (Object.prototype.hasOwnProperty.call(context, 'length')) {
      while (next.toString().length <= context.length) {
        next = previous + next;
        [previous, current] = [current, next];

        if (next.toString().length === context.length) {
          result.push(next);
        }
      }
    } else {
      while (next <= context.max) {
        next = previous + next;
        [previous, current] = [current, next];

        if (next >= context.min && next <= context.max) {
          result.push(next);
        }
      }
    }

    return result;
  } catch (e) {
    return e;
  }
}
