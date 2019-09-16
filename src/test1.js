import {printCheckerboard} from './task1.js';

const assert = chai.assert;

export const test1 = function testPrintCheckerboard() {
  describe('Task 1 tests', () => {
    describe('printCheckerboard(colNumber, rowNumber, symbol)', () => {
      describe('Incorrect ways to use', () => {
        it('Empty parameter → () → Fail', () => {
          assert.deepEqual(printCheckerboard(),
            {
              status: 'failure',
              reason: 'One or all parameters is empty. Please enter valid parameters.',
            });
        });

        it('One lost parameter → (10, \'*\') → Fail', () => {
          assert.deepEqual(printCheckerboard(10, '*'),
            {
              status: 'failure',
              reason: 'One or all parameters is empty. Please enter valid parameters.',
            });
        });

        it('The \'colNumber\' is less than 0 → (-10, 10, \'*\') → Fail', () => {
          assert.deepEqual(printCheckerboard(-10, 10, '*'),
            {
              status: 'failure',
              reason: 'The properties \'colNumber\' and \'rowNumber\' have to be more than 0. Please enter valid parameters.',
            });
        });

        it('The \'rowNumber\' is less than 0 → (10, -10, \'*\') → Fail', () => {
          assert.deepEqual(printCheckerboard(10, -10, '*'),
            {
              status: 'failure',
              reason: 'The properties \'colNumber\' and \'rowNumber\' have to be more than 0. Please enter valid parameters.',
            });
        });

        it('The \'symbol\' isn\'t a single character string → (10, 10, \'**\') → Fail', () => {
          assert.deepEqual(printCheckerboard(10, 10, '**'),
            {
              status: 'failure',
              reason: 'The property \'symbol\' has to be a single character string. Please enter valid symbol.',
            });
        });

        it('The one of parameters is wrong type → (10, \'*\', \'*\') → Fail', () => {
          assert.deepEqual(printCheckerboard(10, '*', '*'),
            {
              status: 'failure',
              reason: 'The properties \'colNumber\' and \'rowNumber\' have to be Integer. Please enter valid parameters.',
            });
        });

        it('The \'colNumber\' is equal to 0 → (0, 10, \'*\') → Fail', () => {
          assert.deepEqual(printCheckerboard(0, 10, '*'),
            {
              status: 'failure',
              reason: 'The properties \'colNumber\' and \'rowNumber\' have to be more than 0. Please enter valid parameters.',
            });
        });

        it('The \'rowNumber\' is equal to 0 → (10, 0, \'*\') → Fail', () => {
          assert.deepEqual(printCheckerboard(10, 0, '*'),
            {
              status: 'failure',
              reason: 'The properties \'colNumber\' and \'rowNumber\' have to be more than 0. Please enter valid parameters.',
            });
        });
      });

      describe('Correct ways to use', () => {
        it('printCheckerboard(1, 1, \'*\') → OK', () => {
          assert.equal(printCheckerboard(1, 1, '*'), '* ');
        });

        it('printCheckerboard(5, 5, \'*\') → OK', () => {
          assert.equal(printCheckerboard(5, 5, '*'),
            `* * * * * 
 * * * * *
* * * * * 
 * * * * *
* * * * * `);
        });

        it('printCheckerboard(10, 7, \'😃\') → OK', () => {
          assert.equal(printCheckerboard(10, 7, '😃'),
            `😃 😃 😃 😃 😃 😃 😃 😃 😃 😃 
 😃 😃 😃 😃 😃 😃 😃 😃 😃 😃
😃 😃 😃 😃 😃 😃 😃 😃 😃 😃 
 😃 😃 😃 😃 😃 😃 😃 😃 😃 😃
😃 😃 😃 😃 😃 😃 😃 😃 😃 😃 
 😃 😃 😃 😃 😃 😃 😃 😃 😃 😃
😃 😃 😃 😃 😃 😃 😃 😃 😃 😃 `);
        });
      });
    });
  });
}
