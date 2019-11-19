'use strict'

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    const now = new Date();
    const birthdayDate = new Date(birthday);
    const diff = now - birthdayDate;
    const age = diff / 31557600000;
    console.log(age);
    if (age >= 18) {
        console.log('Клиент совершеннолетний');
        return true;
    } else {
        console.log('Пей лимонад');
        return false;
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
    if (animal === undefined) {
        return null;
    } else {
        const sound = animal.sound;
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
    let summary = 0;
    for (let num in marks){
        summary += parseInt(marks[num]);
    }
    const average = summary / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
};