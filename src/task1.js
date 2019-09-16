export const printCheckerboard = function printCheckerboard(colNumber, rowNumber, symbol) {
  try {
    if (colNumber === undefined || rowNumber === undefined || symbol === undefined) {
      throw {
        status: 'failure',
        reason: 'One or all parameters is empty. Please enter valid parameters.',
      }
    }

    if (!Number.isInteger(colNumber) || !Number.isInteger(rowNumber)) {
      throw {
        status: 'failure',
        reason: 'The properties \'colNumber\' and \'rowNumber\' have to be Integer. Please enter valid parameters.',
      }
    }

    if (colNumber <= 0 || rowNumber <= 0) {
      throw {
        status: 'failure',
        reason: 'The properties \'colNumber\' and \'rowNumber\' have to be more than 0. Please enter valid parameters.',
      }
    }

    if (colNumber > 50 || rowNumber > 50) {
      throw {
        status: 'failure',
        reason: 'The properties \'colNumber\' and \'rowNumber\' have to be less or equal than 50. Please enter valid parameters.',
      }
    }

    if (
      symbol.codePointAt(0) > 65535 && symbol.length > 2
      || symbol.codePointAt(0) <= 65535 && symbol.length > 1
      || symbol.length === 0
    ) {
      throw {
        status: 'failure',
        reason: 'The property \'symbol\' has to be a single character string. Please enter valid symbol.',
      }
    }

    let result = '';

    for (let i = 0; i < rowNumber; i += 1) {
      for (let j = 0; j < colNumber; j += 1) {
        if (i % 2 === 0) {
          result += symbol + ' ';
        } else {
          result += ' ' + symbol;
        }
      }

      if (i !== rowNumber - 1) {
        result += '\n';
      }
    }
    return result;
    } catch (e) {
      return e;
  }
}
