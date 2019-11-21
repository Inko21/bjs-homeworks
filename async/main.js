'use strict'
function setAlarm (time, callback){
  function systemTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10){
      hours = '0' + hours;
    }
    if (minutes < 10){
      minutes = '0' + minutes;
    }
    let currentTime = `${hours}:${minutes}`;
    console.log(currentTime);
    return currentTime;
  };
  if (systemTime() === time){
    return callback;
  };
};

function setDailyRhythm(wakeUpTime, bedTime){
  const wakeUp = () => console.log('Доброе утро');
  const goToSleep = () => console.log('Спокойной ночи');
  
  setInterval(setAlarm, 1000, wakeUpTime, wakeUp);
  setInterval(setAlarm, 1000, bedTime, goToSleep);
};

console.log(setDailyRhythm("15:36", "15:37"));