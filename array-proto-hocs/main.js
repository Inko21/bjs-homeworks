'use strict'
// задание 1
function compareArrays(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  };
  for(let i in arr1){
    if(arr2.indexOf(arr1[i]) === -1 || arr2.indexOf(arr1[i]) !== arr1.indexOf(arr1[i])){
      return false;
    } else {
    return true;
    };
  };
};

// Альтернативный вариант решения

const compareArray = (arr1, arr2) => arr1.length !== arr2.length ? false : arr1.every((num, i) => num === arr2[i]);

const mas1 = [1, 2, 3];
const mas2 = [1, 2, 3];
compareArray(mas1, mas2);

// задание 2

function memoize(fn, limit) {
  const memory = [];
  return function () {
    let result = 0;
    let argumentsFunction = Array.from(arguments);
    let elementCheck = memory.find(function (element, i){
      return element(argumentsFunction, memory[i].argumentsFunction);
    });
    if (elementCheck === undefined) {
      let result = fn(...argumentsFunction);
      memory.push({argumentsFunction, result});
    } else {
      result = elementCheck.result;
    }
    if (memory.length > (limit)) {
      memory.shift();
    }
      return result;
  }
};