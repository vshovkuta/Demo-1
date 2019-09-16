import {getFibonacci} from "./task7.js";

const assert = chai.assert;

export const test7 = function testGetFibonacci() {
  describe('Task 7 tests', () => {
    describe('getFibonacci(context)', () => {
      describe('Incorrect ways to use', () => {
        it('Empty parameter → () → Fail', () => {
          assert.deepEqual(getFibonacci(),
            {
              status: 'failure',
              reason: 'The parameter is empty. Please enter valid parameter.',
            });
        });

        it('Simple list of the arguments in parameter → (9, 1000) → Fail', () => {
          assert.deepEqual(getFibonacci(9, 1000),
            {
              status: 'failure',
              reason: 'The parameter has to be an object. Please enter valid parameter.',
            });
        });

        it('One lost property → ({ min: 10 }) → Fail', () => {
          assert.deepEqual(getFibonacci({ min: 10 }),
            {
              status: 'failure',
              reason: 'The \'min\' and \'max\' properties have to be both. Please enter valid parameters.',
            });
        });

        it('The one of properties is less than 0 → ({ min: -10, max: 1000 }) → Fail', () => {
          assert.deepEqual(getFibonacci({ min: -10, max: 1000 }),
            {
              status: 'failure',
              reason: 'The \'min\' and \'max\' properties have to be more or equal than 0. Please enter valid parameters.',
            });
        });


        it('Mixing the properties of \'min\' & \'max\' and \'length\' → ({ min: 9, length: 10 }) → Fail', () => {
          assert.deepEqual(getFibonacci({ min: 9, length: 10 }),
            {
              status: 'failure',
              reason: 'The object \'context\' has to have either \'max\' and \'min\' properties or only \'length\' property. Please enter valid parameter.',
            });
        });

        it('Mixing the properties of \'min\' & \'max\' and \'length\' → ({ min: 9, max: 1000, length: 10 }) → Fail', () => {
          assert.deepEqual(getFibonacci({ min: 9, max: 1000, length: 10 }),
            {
              status: 'failure',
              reason: 'The object \'context\' has to have either \'max\' and \'min\' properties or only \'length\' property. Please enter valid parameter.',
            });
        });

        it('The \'min\' property is more than \'max\' one → ({ min: 1000, max: 10 }) → Fail', () => {
          assert.deepEqual(getFibonacci({ min: 1000, max: 10 }),
            {
              status: 'failure',
              reason: 'The \'min\' property has to be less than \'max\' one. Please enter valid parameters.',
            });
        });

        it('The one of properties isn\'t a number → ({ min: \'one\', max: 1000 }) → Fail', () => {
          assert.deepEqual(getFibonacci({ min: 'one', max: 1000 }),
            {
              status: 'failure',
              reason: 'The \'min\' and \'max\' properties have to be more or equal than 0. Please enter valid parameters.',
            });
        });

        it('The one of properties isn\'t a number → ({ min: 5, max: \'100k\' }) → Fail', () => {
          assert.deepEqual(getFibonacci({ min: 5, max: '100k' }),
            {
              status: 'failure',
              reason: 'The \'min\' and \'max\' properties have to be more or equal than 0. Please enter valid parameters.',
            });
        });

        it('The \'min\' or \'max\' property is more than 9,007,199,254,740,991 (2**53) → (5, 2**53) → Fail', () => {
          assert.deepEqual(getFibonacci({ min: 5, max: 2**53 }),
            {
              status: 'failure',
              reason: 'The \'min\' and \'max\' properties have to be less or equal than 9,007,199,254,740,991 (2^53 - 1). Please enter valid parameters.',
            });
        });

        it('The \'length\' property is less than 0 → ({ length: -10 }) → Fail', () => {
          assert.deepEqual(getFibonacci({ length: -10 }),
            {
              status: 'failure',
              reason: 'The \'length\' property has to be more or equal than 0. Please enter valid parameter.',
            });
        });

        it('The \'length\' property is more than 15 → ({ length: 25 }) → Fail', () => {
          assert.deepEqual(getFibonacci({ length: 25 }),
            {
              status: 'failure',
              reason: `The \'length\' property has to be less or equal than 15 symbols. Please enter valid parameter.`,
            });
        });
      });

      describe('Correct ways to use', () => {
        it('getFibonacci({ min: 5, max: 5 })', () => {
          assert.deepEqual(getFibonacci({ min: 5, max: 5 }),
            [5]
          );
        });

        it('getFibonacci({ min: 5, max: 120 })', () => {
          assert.deepEqual(getFibonacci({ min: 5, max: 120 }),
            [5, 8, 13, 21, 34, 55, 89]
          );
        });

        it('getFibonacci({ min: 5, max: 1,000,000,000,000 })', () => {
          assert.deepEqual(getFibonacci({ min: 5, max: 1000000000000 }),
            [
              5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
              1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368,
              75025, 121393, 196418, 317811, 514229, 832040,
              1346269, 2178309, 3524578, 5702887, 9227465,
              14930352, 24157817, 39088169, 63245986, 102334155,
              165580141, 267914296, 433494437, 701408733,
              1134903170, 1836311903, 2971215073, 4807526976,
              7778742049, 12586269025, 20365011074, 32951280099,
              53316291173, 86267571272, 139583862445, 225851433717,
              365435296162, 591286729879, 956722026041
            ]);
        });

        it('getFibonacci({ min: 5, max: 2**53 - 1 })', () => {
          assert.deepEqual(getFibonacci({min: 5, max: 2**53 - 1}),
            [
              5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
              1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368,
              75025, 121393, 196418, 317811, 514229, 832040,
              1346269, 2178309, 3524578, 5702887, 9227465,
              14930352, 24157817, 39088169, 63245986, 102334155,
              165580141, 267914296, 433494437, 701408733,
              1134903170, 1836311903, 2971215073, 4807526976,
              7778742049, 12586269025, 20365011074, 32951280099,
              53316291173, 86267571272, 139583862445, 225851433717,
              365435296162, 591286729879, 956722026041,
              1548008755920, 2504730781961, 4052739537881,
              6557470319842, 10610209857723, 17167680177565,
              27777890035288, 44945570212853, 72723460248141,
              117669030460994, 190392490709135, 308061521170129,
              498454011879264, 806515533049393, 1304969544928657,
              2111485077978050, 3416454622906707, 5527939700884757,
              8944394323791464
            ]);
        });

        it('getFibonacci({ length: 2 })', () => {
          assert.deepEqual(getFibonacci({length: 2}),
            [13, 21, 34, 55, 89]);
        });

        it('getFibonacci({ length: 10 })', () => {
          assert.deepEqual(getFibonacci({ length: 10 }),
            [1134903170, 1836311903, 2971215073, 4807526976, 7778742049]);
        });
      });
    });
  });
}
