const newYear = "17 May 2021";
const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countDown(){
    const newYearsDate=new Date(newYear);
    const currentDate = new Date();
    //Difference is in milliseconds.
    const seconds = (newYearsDate-currentDate)/1000;
    const days = Math.floor(seconds/3600/24)
    console.log(days);
    const hours = Math.floor((seconds/3600)%24);
    const minutes = Math.floor((seconds/60)%60);
    const sec = Math.floor(seconds%60)
    console.log(hours);
    dayEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = sec;

}

countDown();
setInterval(countDown,1000)