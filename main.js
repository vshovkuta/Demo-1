import {printCheckerboard} from './src/task1.js';
import {triangleSort} from './src/task3.js';
import {getLongestPalindrome} from './src/task4.js';
import {countLuckyTickets} from './src/task5.js';
import {getNumberSequence} from './src/task6.js';
import {getFibonacci} from './src/task7.js';

const showError = function showErrorMessage(objectOfError) {
  document.getElementById('error-caption').innerText = objectOfError.status;
  document.getElementById('error-message').innerText = objectOfError.reason;
  document.getElementById('error').classList.add('show');

  setTimeout(() => document.getElementById('error').classList.remove('show'), 5000);
}

const showResult = function showResultOfTask(result, outputId) {
  if (
    typeof result === 'object'
    && Object.prototype.hasOwnProperty.call(result, 'status')
    && Object.prototype.hasOwnProperty.call(result, 'reason')
  ) {
    showError(result);
  } else if (Array.isArray(result)) {
    document.getElementById(outputId).value = result.join(', ');
  } else if (typeof result !== 'object') {
    document.getElementById(outputId).value = result;
  } else {
    let keyFromObject = Object.keys(result);
    let stringFromObject = '';

    keyFromObject.forEach((key) => stringFromObject = `${stringFromObject}${key}: ${result[key]}\n`);
    document.getElementById(outputId).value = stringFromObject;
  }
}

document.getElementById('error-close').onclick = () => {
  document.getElementById('error').classList.remove('show');
}

const reportValidity = function formReportValidity(formId) {
	 return document.getElementById(formId).reportValidity();
}

// Task 1
document.getElementById('task1-run').onclick = () => {
  let result = printCheckerboard(
    parseInt(document.getElementById('task1-column').value, 10),
    parseInt(document.getElementById('task1-row').value, 10),
    document.getElementById('task1-symbol').value
  );

  showResult(result, 'task1-output');
}

// Task 3
document.getElementById('task3-run').onclick = () => {
  let arrayOfObject = [];
  let result;
  let arrayOfTriangles = [...document.getElementsByClassName('task3-input')];

  if (arrayOfTriangles.every ((item) => {
    return item.getElementsByClassName('task3-vertices')[0].value.length === 3;
  })) {

    arrayOfTriangles.forEach((item) => {
      let triangleObject = {};

      triangleObject.vertices = item.getElementsByClassName('task3-vertices')[0].value;
      triangleObject[triangleObject.vertices[0].toLowerCase()] = parseInt(item.getElementsByClassName('task3-side1')[0].value, 10);
      triangleObject[triangleObject.vertices[1].toLowerCase()] = parseInt(item.getElementsByClassName('task3-side2')[0].value, 10);
      triangleObject[triangleObject.vertices[2].toLowerCase()] = parseInt(item.getElementsByClassName('task3-side3')[0].value, 10);
      arrayOfObject.push(triangleObject);
    });
    result = triangleSort(arrayOfObject);

    showResult(result, 'task3-output');
  }
}

document.getElementById('task3-add').onclick = () => {
  let arrayOfTriangles = [...document.getElementsByClassName('task3-input')];

  if (arrayOfTriangles.length >= 10) {
    showError({status: 'failure', reason: 'You have already added the max number of triangles'});
    return;
  }

  let newTriangle = arrayOfTriangles[0].cloneNode(true);

  Array.prototype.forEach.call(newTriangle.getElementsByTagName('input'), (item) => item.value = '');

  let closeLabel = document.createElement('label');
      closeLabel.append(document.createTextNode('✖'));
      closeLabel.setAttribute('onclick', 'this.parentNode.remove()');
      closeLabel.setAttribute('class', 'delete-button');
  newTriangle.append(closeLabel);
  arrayOfTriangles[arrayOfTriangles.length - 1].after(newTriangle);
}

// Task 4
document.getElementById('task4-run').onclick = () => {
  let result = getLongestPalindrome(document.getElementById('task4-input').value);

  showResult(result, 'task4-output');
}

// Task 5
document.getElementById('task5-run').onclick = () => {
  let result = countLuckyTickets({
    min: parseInt(document.getElementById('task5-start').value, 10),
    max: parseInt(document.getElementById('task5-end').value, 10),
  });

  showResult(result, 'task5-output');
}

//Task 6
document.getElementById('task6-run').onclick = () => {
  let result = getNumberSequence(
    parseInt(document.getElementById('task6-length').value, 10),
    parseInt(document.getElementById('task6-square').value, 10)
  );

  showResult(result, 'task6-output');
}

// Task7
document.getElementById('task7-run-min').onclick = () => {
  let result = getFibonacci({
    min: parseInt(document.getElementById('task7-start').value, 10),
    max: parseInt(document.getElementById('task7-end').value, 10),
  });

  showResult(result, 'task7-output');
}

document.getElementById('task7-run-length').onclick = () => {
  let result = getFibonacci({
    length: parseInt(document.getElementById('task7-length').value, 10),
  });

  showResult(result, 'task7-output');
}
