'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
// Задание 1
  let x = [];
  let dis = (b ** 2) - 4 * a * c;
  if (dis < 0) {
    return x;
  };
  if (dis === 0) {
    let y = -b / (2 * a);
    x.push(y);
    return x;
  };
  if (dis > 0) {
    let y1 = (-b + Math.sqrt(dis)) / (2 * a);
    let y2 = (-b - Math.sqrt(dis)) / (2 * a);
    x.push(y1, y2);
    return x;
  };
};

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
  // код для задачи №2 писать здесь
  let averageMark = 0;
  let counter = 0;
  if (marks.length > 5) {
    console.log('Количество оценок более 5');
    marks = marks.splice(5);
  };
  for (let i = 0; i < marks.length; i++) {
    counter += marks[i]; 
  };
  console.log(`Средняя отметка: ${averageMark}`)
  return averageMark = Math.round(counter / marks.length);
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
  let date = dateOfBirthday.getFullYear();
  let currentDay = new Date();
  let currentYear = currentDay.getFullYear();
  let age = currentYear - date;
  let result = '';
  if (age >= 18) {
    result =`Не желаете ли олд-фэшн, ${name} ?`;
  } else {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
  console.log(result);
  return result;
}