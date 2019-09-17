export const triangleSort = function getArrayOfSortedTrianglesVertices(arrayOfObject) {
  try {
    if (arrayOfObject === undefined) {
      throw {
        status: 'failure',
        reason: 'The parameter is empty. Please enter valid parameter.',
      }
    }

    if (!Array.isArray(arrayOfObject)) {
      throw {
        status: 'failure',
        reason: 'The parameter has to be an array of objects. Please enter valid parameter.',
      }
    }

    if (arrayOfObject.length < 2 || arrayOfObject.length > 10 ) {
      throw {
        status: 'failure',
        reason: 'The length of the array of objects has to be between 2 and 10. Please enter valid parameter.',
      }
    }

    arrayOfObject.forEach((object) => {
      if (object.vertices.length !== 3) {
        throw {
          status: 'failure',
          reason: `The property 'vertices' of the object '${object.vertices}' has to be a three-character string. Please enter valid parameter.`,
        }
      }

      if (!/[A-Z]{3}/.test(object.vertices)) {
        throw {
          status: 'failure',
          reason: `The property 'vertices' of the object '${object.vertices}' has to be an uppercase string. Please enter valid parameter.`,
        }
      }

      let triangleVertices = object.vertices.toLowerCase().split('').sort();
      let triangleVerticesLength = new Set(triangleVertices);

      if (triangleVerticesLength.size < 3) {
        throw {
          status: 'failure',
          reason: `The element of the array with vertices '${object.vertices}' mustn't have the same vertices (E.g. for object with vertices 'XYZ' properties have to be 'x', 'y' and 'z'). Please enter valid parameters.`,       }
      }

      if (
        !Object.prototype.hasOwnProperty.call(object, triangleVertices[0]) || !Object.prototype.hasOwnProperty.call(object, triangleVertices[1])
        || !Object.prototype.hasOwnProperty.call(object, triangleVertices[2]) || !Object.prototype.hasOwnProperty.call(object, 'vertices')
     ) {
        throw {
          status: 'failure',
          reason: `The element of the array with vertices '${object.vertices}' has to be correct objects (E.g. for object with vertices 'XYZ' properties have to be 'x', 'y' and 'z'). Please enter valid parameters.`,
        }
      }

      if (object[triangleVertices[0]] <= 0 || object[triangleVertices[1]] <= 0 || object[triangleVertices[2]] <= 0) {
        throw {
          status: 'failure',
          reason: `The properties of the object '${object.vertices}' have to be numbers more than 0. Please enter valid parameters.`,
        }
      }

      if (
        object[triangleVertices[0]] >= object[triangleVertices[1]] + object[triangleVertices[2]]
        || object[triangleVertices[1]] >= object[triangleVertices[0]] + object[triangleVertices[2]]
        || object[triangleVertices[2]] >= object[triangleVertices[0]] + object[triangleVertices[1]]
     ) {
        throw {
          status: 'failure',
          reason: `The object with vertices '${object.vertices}' has to be a triangle. Please enter valid parameters.`,
        }
      }

      if (!Number.isFinite(object[triangleVertices[0]]) || !Number.isFinite(object[triangleVertices[1]]) || !Number.isFinite(object[triangleVertices[2]])) {
        throw {
          status: 'failure',
          reason: `The properties '${triangleVertices[0]}', '${triangleVertices[1]}' and '${triangleVertices[2]}' of the object '${object.vertices}' have to be numbers. Please enter valid parameters.`,
        }
      }

        object.p = (object[triangleVertices[0]] + object[triangleVertices[1]] + object[triangleVertices[2]])/2;
        object.square = Math.sqrt(object.p * (object.p - object[triangleVertices[0]]) * (object.p - object[triangleVertices[1]]) * (object.p - object[triangleVertices[2]]));

    });

    arrayOfObject.sort((object1, object2) => object2.square - object1.square);

    return arrayOfObject.map((object) => object.vertices);
  } catch (e) {
    return e;
  }
}
