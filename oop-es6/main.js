'use strict'
// Задание 1 "Оружие"
class Weapon {
  constructor(name, attack, durability, range){
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.startDurability = this.durability;
  }
  
  takeDamage(damage){
    if (damage > this.durability) {
      this.durability = 0
    } else { 
      this.durability = this.durability - damage;
    }
  }

  getDamage(){
    let check = this.durability / this.startDurability * 100;
    if (check >= 30) {
      return this.attack;
    } else {
      return this.attack / 2;
    };
  };

  isBroken(){
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    };
  };
};

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 200, 4);
const ax = new Weapon('Секира', 27, 800, 1);
const staffOfTheStorm = new Weapon('Посох Бури', 10, 300, 3);

bow.takeDamage(180);
console.log(bow.durability);
bow.takeDamage(210);
console.log(bow.durability);
arm.takeDamage(210);
console.log(arm.durability);
bow.getDamage()
console.log(bow.getDamage());
sword.getDamage()
console.log(sword.getDamage());
console.log(sword.isBroken());
console.log(bow.isBroken());
console.log('\n');
console.log('Второе задание:');

// Задание 2 "Переработка оружия"
class Arm extends Weapon {
  constructor(name, attack, durability, range, startDurability){
    super(name, attack, durability, range, startDurability);
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
    this.startDurability = this.durability;
  }
};

class Bow extends Weapon {
  constructor(name, attack, durability, range, startDurability){
    super(name, attack, durability, range, startDurability);
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
    this.startDurability = this.durability;
  }
};

class Sword extends Weapon {
  constructor(name, attack, durability, range, startDurability){
    super(name, attack, durability, range, startDurability);
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    this.startDurability = this.durability;
  }
};

class Knife extends Weapon {
  constructor(name, attack, durability, range, startDurability){
    super(name, attack, durability, range, startDurability);
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
    this.startDurability = this.durability;
  }
};

class Staff extends Weapon {
  constructor(name, attack, durability, range, startDurability){
    super(name, attack, durability, range, startDurability);
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
    this.startDurability = this.durability;
  }
};

class LongBow extends Bow {
  constructor(name, attack, durability, range, startDurability){
    super(name, attack, durability, range, startDurability);
    this.name = 'Длинный лук';
    this.attack = 15;
    this.durability = 200;
    this.range = 4;
    this.startDurability = this.durability;
  }
};

class Ax extends Sword {
  constructor(name, attack, durability, range, startDurability){
    super(name, attack, durability, range, startDurability);
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    this.range = 1;
    this.startDurability = this.durability;
  }
};

class StaffOfTheStorm extends Staff {
  constructor(name, attack, durability, range, startDurability){
    super(name, attack, durability, range, startDurability);
    this.name = 'Посох Бури';
    this.attack = 10;
    this.durability = 300;
    this.range = 3;
    this.startDurability = this.durability;
  }
};

const newBow = new Bow();
const newArm = new Arm();
const newSword = new Sword();
const newStaff = new StaffOfTheStorm();

newStaff.takeDamage(1);
console.log(newStaff.durability);
newBow.takeDamage(180);
console.log(newBow.durability);
newBow.takeDamage(210);
console.log(newBow.durability);
newArm.takeDamage(210);
console.log(newArm.durability);
newBow.getDamage()
console.log(newBow.getDamage());
newSword.getDamage()
console.log(newSword.getDamage());
console.log(newSword.isBroken());
console.log(newBow.isBroken());
console.log('\n');
console.log('Третье задание:');

// Задача 3 Школьный журнал
class StudentLog {
  constructor(name){
    this.name = name;
    this.magazine = [];
  };

  getName(){
    return this.name;
  };

  addGrade(grade, subject){
    if (typeof grade !== 'number' || grade < 0 || grade > 5) {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
    } else if(subject in this.magazine){
      this.magazine[subject].push(grade);
      return this.magazine[subject].length;
    } else {
      this.magazine[subject] = [grade];
      return 1;
    };
  };

  getAverageBySubject(subject) {
    let average = null;
    if (subject in this.magazine){
      for (let grade of this.magazine[subject]){
        average += grade;
      }
      average = average / this.magazine[subject].length;
      return average;
    } else {
      return 0;
    }
  }

  getTotalAverage(){
    let totalAverage = null;
    let gradeLength = null;
    for (let subject in this.magazine){
      gradeLength += this.magazine[subject].length;
      for (let grade in this.magazine[subject]){
        totalAverage += this.magazine[subject][grade];
      }
    };
    return totalAverage / gradeLength;
  };
};

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());
console.log(log.addGrade(5, 'Math'));
console.log(log.addGrade(4, 'Math'));
console.log(log.addGrade(4, 'Math'));
console.log(log.addGrade(4, 'Algebra'));
console.log(log.addGrade('four', 'Algebra'));
console.log(log.getAverageBySubject('Math'));
console.log(log.getAverageBySubject('Biology'));
console.log(log.getTotalAverage()); 