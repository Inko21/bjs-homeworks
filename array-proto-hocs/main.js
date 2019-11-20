'use strict'

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