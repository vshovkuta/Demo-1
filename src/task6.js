export const getNumberSequence = function getNumberSequence(length, firstSquare) {
  try {
    if (length === undefined || firstSquare === undefined) {
      throw {
        status: 'failure',
        reason: 'One or all parameters is empty. Please enter valid parameters.',
      }
    }

    if (!Number.isInteger(length) || !Number.isInteger(firstSquare)) {
      throw {
        status: 'failure',
        reason: 'The properties \'length\' and \'firstSquare\' have to be Integer. Please enter valid parameters.',
      }
    }

    if (length > 100) {
      throw {
        status: 'failure',
        reason: 'The length of sequence has to be less or equal than 100. Please enter valid parameter.',
      }
    }

    if (firstSquare > 1000000) {
      throw {
        status: 'failure',
        reason: 'The square of the first number has to be less or equal than 1,000,000. Please enter valid parameter.',
      }
    }

    if (length < 0 || firstSquare < 0) {
      throw {
        status: 'failure',
        reason: 'The length of sequence and square of the first number have to be more or equal than 0. Please enter valid parameters.',
      }
    }

    let min = Math.ceil(Math.sqrt(firstSquare));
    let max =  min + length;
    let result = [];

    for (let i = min; i < max; i += 1) {
      result.push(i);
    }

    return result.join(', ');
  } catch (e) {
    return e;
  }
}
