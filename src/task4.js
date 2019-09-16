export const getLongestPalindrome = function getLongestPalindromByOddManacher(number) {
  try {
    if (number === undefined) {
      throw {
        status: 'failure',
        reason: 'The parameter is empty. Please enter valid parameter.',
      }
    }

    let numberStr = number.toString();

    if (!/^\d+$/.test(numberStr)) {
      throw {
        status: 'failure',
        reason: 'The input parameter has to be integer more or equal than 0. Please enter valid parameter.',
      }
    }

    if (numberStr.length > 100) {
      throw {
        status: 'failure',
        reason: 'The length of the input number has to be less or equal 100. Please enter valid parameter.',
      }
    }

    let oddNumberStr = `.${numberStr.split('').join('.')}.`;
    let arrayOfLengths = [];
    let center = 0;
    let end = 0;
    let oddNumberStrLength = oddNumberStr.length;

    for (let i = 0; i < oddNumberStrLength; i += 1) {

      if (end > i) {
        arrayOfLengths[i] = Math.min(end - i, arrayOfLengths[center - (i - center)]);
      } else {
        arrayOfLengths[i] = 0;
      }

      while (
        oddNumberStr[i + 1 + arrayOfLengths[i]] !== undefined
        && oddNumberStr[i - 1 + arrayOfLengths[i]] !== undefined
        && oddNumberStr[(i + 1) + arrayOfLengths[i]] === oddNumberStr[(i - 1) - arrayOfLengths[i]]
        ) {
        arrayOfLengths[i] += 1;
      }

      if (end < i + arrayOfLengths[i]) {
        center = i;
        end = i + arrayOfLengths[i];
      }
    }

    let [lengthOfLongestPalindrome, indexOfLongestPalindrome] = arrayOfLengths.reduce((previousMax, item, index, arr) => {
      if (item > arr[previousMax[1]]) {
        return [item, index];
      } else {
        return previousMax;
      }
    }, [0, 0]);

    let startIndex = Math.floor((indexOfLongestPalindrome - lengthOfLongestPalindrome) / 2);

    if (lengthOfLongestPalindrome !== 1) {
      return numberStr.substring(startIndex, startIndex + lengthOfLongestPalindrome);
    }
    return 0;
  } catch (e) {
    return e;
  }
}
