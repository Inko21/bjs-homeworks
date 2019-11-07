"use strict";

const getSolutions = (a, b, c) => {
  let d = (b ** 2) - 4 * a * c;
  if (d < 0) {
    return {
      D: d
    };
  };
  if (d === 0) {
    let x1 = -b / (2 * a);
    return { 
      roots: [x1], 
      D: d 
    };
  };
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / 2 * a; 
    let x2 = (-b - Math.sqrt(d)) / 2 * a;
    return { 
      roots: [x1, x2], 
      D: d
    };
  };
};

const showSolutionsMessage = (a, b, c) => {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  };
};

showSolutionsMessage(1, 2, 3);
console.log('\n');
showSolutionsMessage(7, 20, -3);
console.log('\n');
showSolutionsMessage(2, 4, 2);
console.log('\n');

const getAverageScore = (data) => {
  let average = null, counter = null, sumOfGraduates = null, sum = null; 
  let displayAverageGraduates = [];
  let result = {};
  for (let lessons in data) {
    counter++;
    sumOfGraduates = 0;
    let oneLesson = data[lessons];
    for (let i = 0; i < oneLesson.length; i++) {
      sumOfGraduates += oneLesson[i];
    };
    let averageGraduates = sumOfGraduates / oneLesson.length;
    displayAverageGraduates.push(averageGraduates);
    result[lessons] = averageGraduates;
  };
  for (let i = 0; i < displayAverageGraduates.length; i++) {
    sum += displayAverageGraduates[i];
  };
  result.average = sum / counter;;
  return result;
};

const getPersonData = (secretData) => {
  if (secretData.aaa == 0 & secretData.bbb == 0) {
    return {
      firstName: 'Родриго',
      lastName: 'Родриго'
    };
  } else if (secretData.aaa == 1 & secretData.bbb == 0) {
    return {
      firstName: 'Эмильо',
      lastName: 'Родриго'
    };
  } else if (secretData.aaa == 0 & secretData.bbb == 1) {
    return {
      firstName: 'Родриго',
      lastName: 'Эмильо'
    };
  }
    else if (secretData.aaa == 1 & secretData.bbb == 1) {
    return {
      firstName: 'Эмильо',
      lastName: 'Эмильо'
    };
  }; 
};