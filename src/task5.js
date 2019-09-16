export const countLuckyTickets = function countLuckyTicketsByDifferentMethods(context) {
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
        reason: 'The parameter have to be an object. Please enter valid parameter.',
      }
    }

    if (
      !Object.prototype.hasOwnProperty.call(context, 'min')
      || !Object.prototype.hasOwnProperty.call(context, 'max')
    ) {
      throw {
        status: 'failure',
        reason: 'The \'min\' and \'max\' properties have to be both. Please enter valid parameters.',
      }
    }

    if (context.min < 0 || context.min > 999999 || isNaN(context.min) || !Number.isInteger(parseFloat(context.min))) {
      throw {
        status: 'failure',
        reason: 'The \'min\' property has to be an integer between 0 and 999,999. Please enter valid parameter.',
      }
    }

    if (context.max < 0 || context.max > 999999 || isNaN(context.max) || !Number.isInteger(parseFloat(context.max))) {
      throw {
        status: 'failure',
        reason: 'The \'max\' property has to be an integer between 0 and 999,999. Please enter valid parameter.',
      }
    }

    if (parseInt(context.min, 10) > parseInt(context.max, 10)) {
      throw {
        status: 'failure',
        reason: 'The \'min\' property has to be less than \'max\' one. Please enter valid parameters.',
      }
    }

    let current;
    let countBySemiSum = 0;
    let countByEvenOdd = 0;
    let winner;

    for (let i = parseInt(context.min, 10); i <= context.max; i += 1) {
      current = i.toString().padStart(6, '0');

      if (
        parseInt(current[0], 10) + parseInt(current[1], 10) + parseInt(current[2], 10)
        === parseInt(current[3], 10) + parseInt(current[4], 10) + parseInt(current[5], 10)
      ) {
        countBySemiSum += 1;
      }

      if (
        parseInt(current[0], 10) + parseInt(current[2], 10) + parseInt(current[4], 10)
        === parseInt(current[1], 10) + parseInt(current[3], 10) + parseInt(current[5], 10)
      ) {
        countByEvenOdd += 1;
      }
    }

    if (countBySemiSum === countByEvenOdd) {
      winner = 'The same result';
    } else if (countBySemiSum > countByEvenOdd) {
      winner = 'Simple method';
    } else {
      winner = 'Complex method';
    }

    return {
      Winner: winner,
      'Simple method': countBySemiSum,
      'Complex method': countByEvenOdd,
    }
  } catch (e) {
    return e;
  }
}
