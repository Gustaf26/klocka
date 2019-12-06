/**
 * Dates and Time.
 *
 */


let clockEl = document.querySelector('#clock');

let dayEl = document.querySelector('#dayOfMonth');

let monthEl = document.querySelector('#month');

let yearEl = document.querySelector('#year');

let hourEl = document.querySelector('#hour');

let minuteEl = document.querySelector('#minute');

let secondsEl = document.querySelector('#second');

const updateClock = () => {

    const now = new Date();

    const dayOfMonth =now.getDate();

    dayEl.innerText=dayOfMonth;

    const month =now.getMonth()+1;

    monthEl.innerText = month;

     const year = now.getFullYear();

    yearEl.innerText = year; 

    const hour = now.getHours();

    hourEl.innerText = hour;

    const minutes = now.getMinutes();
    minuteEl.innerText = minutes;

    const seconds = now.getSeconds();
    secondsEl.innerText = seconds;
     
}

clockEl = setInterval(updateClock,1000);

// COUNTDOWN TO NEW YEAR

//Kolla setINterval(t);
// moment().format();

/*definir fecha del 31 a las 23:59:59

funcion countdown con setInterval restando cada segundo

*/

let countdownEl = document.querySelector('#countdown');
let nyTime = document.querySelector('#nytime');
let newYear = moment('01/01/2020', 'DD/MM/YYYY');

const updateCountdown = () =>{

nytid = newYear.subtract(1, 'second');

newYear = nytid;

nyTime.innerText = nytid;

return nyTime;

}

countdownEl = setInterval(updateCountdown,1000);

