import {getNumberSequence} from './task6.js';

const assert = chai.assert;

export const test6 = function testGetNumberSequence() {
  describe( 'Task 6 tests', () =>{
    describe( 'getNumberSequence( length, firstSquare )', () => {
      describe('Incorrect ways to use', () => {
        it('Empty parameter → () → Fail', () => {
          assert.deepEqual(getNumberSequence(),
            {
              status: 'failure',
              reason: 'One or all parameters is empty. Please enter valid parameters.',
            });
        });

        it('One lost parameter → (5) → Fail', () => {
          assert.deepEqual(getNumberSequence(5),
            {
              status: 'failure',
              reason: 'One or all parameters is empty. Please enter valid parameters.',
            });
        });

        it('The one of properties isn\'t an integer number → (5.5, 6) → Fail', () => {
          assert.deepEqual(getNumberSequence(5.5, 6),
            {
              status: 'failure',
              reason: 'The properties \'length\' and \'firstSquare\' have to be Integer. Please enter valid parameters.',
            });
        });

        it('The length of sequence is more than 100 → (500, 6) → Fail', () => {
          assert.deepEqual(getNumberSequence(500, 6),
            {
              status: 'failure',
              reason: 'The length of sequence has to be less or equal than 100. Please enter valid parameter.',
            });
        });

        it('The square of the first number is more than 1,000,000 → (5, 1000001) → Fail', () => {
          assert.deepEqual(getNumberSequence(5, 1000001),
            {
              status: 'failure',
              reason: 'The square of the first number has to be less or equal than 1,000,000. Please enter valid parameter.',
            });
        });

        it('The one of properties is less than 0 → (-5, 6) → Fail', () => {
          assert.deepEqual(getNumberSequence(-5, 6),
            {
              status: 'failure',
              reason: 'The length of sequence and square of the first number have to be more or equal than 0. Please enter valid parameters.',
            });
        });
      });
      describe('Correct ways to use', () => {
        it('getNumberSequence(5, 25) → OK', () => {
          assert.deepEqual(getNumberSequence(5, 25), '5, 6, 7, 8, 9');
        });

        it('getNumberSequence(5, 6) → OK', () => {
          assert.deepEqual(getNumberSequence(5, 6), '3, 4, 5, 6, 7');
        });

        it('getNumberSequence(0, 6) → OK', () => {
          assert.deepEqual(getNumberSequence(0, 6), '');
        });

        it('getNumberSequence(6, 0) → OK', () => {
          assert.deepEqual(getNumberSequence(6, 0), '0, 1, 2, 3, 4, 5');
        });
      });
    });
  });
}
