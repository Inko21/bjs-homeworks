'use strict'

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = Date.now(birthday);
    let diff = now - birthday;
    let age = diff / 31557600000;
    console.log(age);
    if (age >= 18) {
        return console.log('Клиент совершеннолетний')
    } else {
        return console.log('Пей лимонад')
    }
};



function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal === undefined) {
        return null;
    } else {
        return sound;
    };
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = null;
    for (let num in marks){
        average += marks[num];
    }
    average = average / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}