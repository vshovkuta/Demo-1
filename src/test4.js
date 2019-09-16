import {getLongestPalindrome} from './task4.js';

const assert = chai.assert;

export const test4 = function testGetLongestPalindrome() {
  describe('Task 4 tests', () => {
    describe('getLongestPalindrome(number)', () => {
      describe('Incorrect ways to use', () => {

        it('Empty parameter → () → Fail', () => {
          assert.deepEqual(getLongestPalindrome(),
            {
              status: 'failure',
              reason: 'The parameter is empty. Please enter valid parameter.',
            });
        });

        it('The parameter isn\'t an integer number → (\'123456.7\') → Fail', () => {
          assert.deepEqual(getLongestPalindrome('123456.7'),
            {
              status: 'failure',
              reason: 'The input parameter has to be integer more or equal than 0. Please enter valid parameter.',
            });
        });

        it('The parameter isn\'t an integer number → (\'-1234567654\') → Fail', () => {
          assert.deepEqual(getLongestPalindrome('-1234567654'),
            {
              status: 'failure',
              reason: 'The input parameter has to be integer more or equal than 0. Please enter valid parameter.',
            });
        });

        it('The parameter isn\'t an integer number → (\'qwertytrewq\') → Fail', () => {
          assert.deepEqual(getLongestPalindrome('qwertytrewq'),
            {
              status: 'failure',
              reason: 'The input parameter has to be integer more or equal than 0. Please enter valid parameter.',
            });
        });

        it('The parameter\'s length is more than 100 symbols → (\'12345678901234567890...12345678901\') → Fail', () => {
          assert.deepEqual(getLongestPalindrome('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901'),
            {
              status: 'failure',
              reason: 'The length of the input number has to be less or equal 100. Please enter valid parameter.',
            });
        });
      });
      describe('Correct ways to use', () => {
        it('getLongestPalindrome(\'12345678987654321\') → OK', () => {
          assert.deepEqual(getLongestPalindrome('12345678987654321'),
            '12345678987654321');
        });
        it('getLongestPalindrome(\'123456789987654321\') → OK', () => {
          assert.deepEqual(getLongestPalindrome('123456789987654321'),
            '123456789987654321');
        });
        it('getLongestPalindrome(\'1234567898765432121\') → OK', () => {
          assert.deepEqual(getLongestPalindrome('1234567898765432121'),
            '12345678987654321');
        });
        it('getLongestPalindrome(\'010123210123\') → OK', () => {
          assert.deepEqual(getLongestPalindrome('010123210123'),
            '101232101');
        });
      });
    });
  });
}
