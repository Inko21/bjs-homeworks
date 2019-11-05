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
  let result = [];
  let discriminant = (b ** 2) - 4 * a * c;
  if (discriminant === 0) {
    let x = -b / (2 * a);
    result.push(x);
  } else if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result.push(x1, x2);
  };
  return result;
};

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let counter = 0;
    if (marks.length >= 5) {
      console.log('Количество оценок более 5');
      marks = marks.slice(0, 5);
    };
    for (let i = 0; i < marks.length; i++) {
      counter += marks[i]; 
    };
    let averageMark = Math.round(counter / marks.length);
    return averageMark;
  };

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
  let result;
  if (age >= 18) {
    result =`Не желаете ли олд-фэшн, ${name} ?`;
  } else {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
  console.log(result);
  return result;
}