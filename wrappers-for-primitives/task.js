"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (typeof percent !== "number") {
      console.log(`Параметр процентная ставка "percent" содержит неправильное значение ${percent} - ${typeof percent}`);
    };
    if (typeof contribution !== "number") {
      console.log(`Параметр сумма первоначального взноса  "contribution" содержит неправильное значение ${contribution} - ${typeof contribution}`);
    };
    if (typeof amount !== "number") {
      console.log(`Параметр сумма кредита "amount" содержит неправильное значение ${amount} - ${typeof amount}`);
    };
    if (typeof date !== "number") {
      console.log(`Параметр срок "date" содержит неправильное значение ${date} - ${typeof date}`);
    };
    
    let moneyForBank = amount - contribution;
    let percentPerMonth = (percent / 100) / 12;
    let moneyPerMonth = moneyForBank * (percentPerMonth + percentPerMonth / ((( 1 + percentPerMonth ) ** date) -1 ));
    let totalAmount = moneyPerMonth * date;
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === "undefined" || name === "null" || name === '""' ||name === "" ){
        name = 'Аноним';
    };
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(greeting);
    return greeting;
};