const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const hrD = document.querySelector(".H");
const minD = document.querySelector(".M");
const secD = document.querySelector(".S");
const ampmD = document.querySelector(".ampm");

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    console.log(hours, minutes, seconds)

    const secondsDeg = (seconds * 6);  // 90 degrees offset to start from 12 o'clock
    const minutesDeg = (minutes * 6);
    const hoursDeg = (hours * 30) + minutesDeg/12;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    let h = hours > 12 ? hours - 12 : hours;
    let m = minutes < 10? "0" + minutes : "" + minutes;
    let s = seconds < 10? "0" + seconds : "" + seconds;
    let ampm  = hours > 12 ? "PM" : "AM"
    hrD.innerHTML = h + ": ";
    minD.innerHTML = m + ":";
    secD.innerHTML = s;
    ampmD.innerHTML = " " + ampm
}

setInterval(updateClock, 1000);

updateClock();  // Initial call to set the time immediately
