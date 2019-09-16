import {triangleSort} from "./task3.js";

const assert = chai.assert;

export const test3 = function testTriangleSort() {
  describe('Task 3 tests', () => {
    describe('triangleSort(arrayOfObject)', () => {
      describe('Incorrect ways to use', () => {
        it('Empty parameter → () → Fail', () => {
          assert.deepEqual(triangleSort(),
            {
              status: 'failure',
              reason: 'The parameter is empty. Please enter valid parameter.'
            });
        });

        it('Simple list of the objects in parameter → ({ vertices: \'DFW\', d: 10, f: 20, w: 22.36 }, { vertices: \'BAC\', a: 15, b: 20, c: 22.36 }) → Fail', () => {
          assert.deepEqual(triangleSort({ vertices: 'DFW', d: 10, f: 20, w: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }),
            {
              status: 'failure',
              reason: 'The parameter has to be an array of objects. Please enter valid parameter.',
            });
        });

        it('The length of the array is less than 2 → ([{ vertices: \'DFW\', d: 10, f: 20, w: 22.36 }]) → Fail', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFW', d: 10, f: 20, w: 22.36 }]),
            {
              status: 'failure',
              reason: 'The length of the array of objects has to be between 2 and 10. Please enter valid parameter.',
            });
        });

        it('The length of the array is more than 10 → ([{vertices: \'DFW\', d: 10, f: 20, w: 22.36}, ..., { vertices: \'BAC\', a: 15, b: 20, c: 22.36 }]) → Fail', () => {
          assert.deepEqual(triangleSort([{vertices: 'DFW', d: 10, f: 20, w: 22.36}, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }]),
            {
              status: 'failure',
              reason: 'The length of the array of objects has to be between 2 and 10. Please enter valid parameter.',
            });
        });

        it('The object in the array doesn\'t have 3 vertices → ([{ vertices: \'DF\', d: 10, f: 20, w: 22.36 }, ...etc]) → Fail', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DF', d: 10, f: 20, w: 22.36 }, {vertices: 'BCA', a: 10, b: 20, c: 12.36}]),
            {
              status: 'failure',
              reason: `The property 'vertices' of the object 'DF' has to be a three-character string. Please enter valid parameter.`,
            });
        });

        it('The object in the array has lowercase vertices → ([{ vertices: \'DFw\', d: 10, f: 20, w: 22.36 }, ...etc]) → Fail', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFw', d: 10, f: 20, w: 22.36 }, {vertices: 'BCA', a: 10, b: 20, c: 12.36}]),
            {
              status: 'failure',
              reason: `The property 'vertices' of the object 'DFw' has to be an uppercase string. Please enter valid parameter.`,
            });
        });

        it('The object in the array has the same vertices → ([{ vertices: \'DFF\', d: 10, f: 20, w: 22.36 }, ...etc]) → Fail', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFF', d: 10, f: 20, w: 22.36 }, {vertices: 'BCA', a: 10, b: 20, c: 12.36}]),
            {
              status: 'failure',
              reason: `The element of the array with vertices 'DFF' mustn\'t have the same vertices (E.g. for object with vertices 'XYZ' properties have to be 'x', 'y' and 'z'). Please enter valid parameters.`,
            });
        });

        it('The object in the array doesn\'t have 3 sides → ([{ vertices: \'DFW\', d: 10, f: 20 }, ...etc]) → Fail', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFW', d: 10, f: 20 }, {vertices: 'BCA', a: 10, b: 20, c: 12.36}]),
            {
              status: 'failure',
              reason: `The element of the array with vertices 'DFW' has to be correct objects (E.g. for object with vertices 'XYZ' properties have to be 'x', 'y' and 'z'). Please enter valid parameters.`,
            });
        });

        it('The one of sides of the object is less than 0 → ([{ vertices: \'DFW\', d: 10, f: 20, w: 0 }, ...etc]) → Fail', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFW', d: 10, f: 20, w: 0 }, {vertices: 'BCA', a: 10, b: 20, c: 12.36}]),
            {
              status: 'failure',
              reason: `The properties of the object 'DFW' have to be numbers more than 0. Please enter valid parameters.`,
            });
        });

        it('The one of sides of the object isn\'t a number → ([{ vertices: \'DFW\', d: \'10\', f: 20, w: 22.36 }, ...etc]) → Fail', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFW', d: '10', f: 20, w: 22.36 }, {vertices: 'BCA', a: 10, b: 20, c: 12.36}]),
            {
              status: 'failure',
              reason: `The properties 'd', 'f' and 'w' of the object 'DFW' have to be numbers. Please enter valid parameters.`,
            });
        });

        it('The object in the array isn\'t a correct triangle → ([{ vertices: \'DFW\', d: 10, f: 20, w: 22.36 }, ...etc]) → Fail', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFW', d: 10, f: 20, w: 22.36 }, {vertices: 'BCA', a: 100, b: 20, c: 12.36}]),
            {
              status: 'failure',
              reason: `The object with vertices 'BCA' has to be a triangle. Please enter valid parameters.`,
            });
        });
      });

      describe('Correct ways to use', () => {
        it('triangleSort([{ vertices: \'DFW\', d: 10, f: 20, w: 22.36 }, {vertices: \'BCA\', a: 10, b: 20, c: 12.36}]) → OK', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFW', d: 10, f: 20, w: 22.36 }, {vertices: 'BCA', a: 10, b: 20, c: 12.36}]),
            ['DFW', 'BCA']);
        });

        it('triangleSort([{ vertices: \'DFW\', d: 10, f: 20, w: 22.36 }, { vertices: \'BAC\', a: 15, b: 20, c: 22.36 }, { vertices: \'BCA\', a: 10, b: 20, c: 12.36 }]) → OK', () => {
          assert.deepEqual(triangleSort([{ vertices: 'DFW', d: 10, f: 20, w: 22.36 }, { vertices: 'BAC', a: 15, b: 20, c: 22.36 }, { vertices: 'BCA', a: 10, b: 20, c: 12.36 }]),
            ['BAC', 'DFW', 'BCA']);
        });
      });
    });
  });
}
