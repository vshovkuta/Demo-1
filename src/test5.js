import {countLuckyTickets} from './task5.js';

const assert = chai.assert;

export const test5 = function testCountLuckyTickets() {
  describe( 'Task 5 tests', () =>{
    describe( 'countLuckyTickets( context )', () => {
      describe('Incorrect ways to use', () => {

        it('Empty parameter → () → Fail', () => {
          assert.deepEqual( countLuckyTickets(),
            {
              status: 'failure',
              reason: 'The parameter is empty. Please enter valid parameter.',
            });
        });

        it('Simple list of the arguments in parameter → (5, 1000) → Fail', () => {
          assert.deepEqual( countLuckyTickets(5, 1000),
            {
              status: 'failure',
              reason: 'The parameter have to be an object. Please enter valid parameter.',
            });
        });

        it('One lost property → ({ min: 5 }) → Fail', () => {
          assert.deepEqual( countLuckyTickets({ min: 5 }),
            {
              status: 'failure',
              reason: 'The \'min\' and \'max\' properties have to be both. Please enter valid parameters.',
            });
        });

        it('One lost property → ({ max: 100000 }) → Fail', () => {
          assert.deepEqual(countLuckyTickets({ max: 100000 }),
            {
              status: 'failure',
              reason: 'The \'min\' and \'max\' properties have to be both. Please enter valid parameters.',
            });
        });

        it('The one of properties isn\'t a number → ({ min: \'one\', max: 100000 }) → Fail', () => {
          assert.deepEqual(countLuckyTickets({ min: 'one', max: 100000 }),
            {
              status: 'failure',
              reason: 'The \'min\' property has to be an integer between 0 and 999,999. Please enter valid parameter.',
            });
        });

        it('The one of properties isn\'t a number → ({ min: 5, max: \'100k\' }) → Fail', () => {
          assert.deepEqual(countLuckyTickets({ min: 5, max: '100k' }),
            {
              status: 'failure',
              reason: 'The \'max\' property has to be an integer between 0 and 999,999. Please enter valid parameter.',
            });
        });

        it('The one of properties isn\'t an integer → ({ min: 5, max: 999999.5 }) → Fail', () => {
          assert.deepEqual(countLuckyTickets({ min: 5, max: 999999.5 }),
            {
              status: 'failure',
              reason: 'The \'max\' property has to be an integer between 0 and 999,999. Please enter valid parameter.',
            });
        });

        it('The one of properties is less than 0 → ({ min: -5, max: 100000 }) → Fail', () => {
          assert.deepEqual(countLuckyTickets({ min: -5, max: 100000 }),
            {
              status: 'failure',
              reason: 'The \'min\' property has to be an integer between 0 and 999,999. Please enter valid parameter.',
            });
        });

        it('The one of properties is more than 999,999 → ({ min: 5, max: 1000000 }) → Fail', () => {
          assert.deepEqual(countLuckyTickets({ min: 5, max: 1000000 }),
            {
              status: 'failure',
              reason: 'The \'max\' property has to be an integer between 0 and 999,999. Please enter valid parameter.',
            });
        });

        it('The \'min\' property is more than \'max\' one → ({ min: 10000, max: 5 }) → Fail', () => {
          assert.deepEqual(countLuckyTickets({ min: 10000, max: 5 }),
            {
              status: 'failure',
              reason: 'The \'min\' property has to be less than \'max\' one. Please enter valid parameters.',
            });
        });
      });

      describe('Correct ways to use', () => {
        it('countLuckyTickets({ min: 5, max: 100 }) → OK', () => {
          assert.deepEqual(countLuckyTickets({ min: 5, max: 100 }),
            {
              Winner: 'Complex method',
              'Simple method': 0,
              'Complex method': 9,
            });
        });

        it('countLuckyTickets({ min: \'5\', max: \'100\' }) → OK', () => {
          assert.deepEqual(countLuckyTickets({ min: '5', max: '100' }),
            {
              Winner: 'Complex method',
              'Simple method': 0,
              'Complex method': 9,
            });
        });

        it('countLuckyTickets({ min: \'5\', max: 100 }) → OK', () => {
          assert.deepEqual(countLuckyTickets({ min: '5', max: 100 }),
            {
              Winner: 'Complex method',
              'Simple method': 0,
              'Complex method': 9,
            });
        });

        it('countLuckyTickets({ min: 0, max: 999999 }) → OK', () => {
          assert.deepEqual(countLuckyTickets({ min: 0, max: 999999 }),
            {
              Winner: 'The same result',
              'Simple method': 55252,
              'Complex method': 55252,
            });
        });

        it('countLuckyTickets({ min: \'000,000\', max: \'999999\' }) → OK', () => {
          assert.deepEqual(countLuckyTickets({ min: '000000', max: '999999' }),
            {
              Winner: 'The same result',
              'Simple method': 55252,
              'Complex method': 55252,
            });
        });
      });
    });
  });
}
