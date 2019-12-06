/**
 * Dates and Time.
 *
 */


let clockEl = document.querySelector('#clock');

let actualTime = document.querySelector('#time');

let now = moment().format('MMMM Do YYYY, h:mm:ss a');

const updateClock = () => {

    actualTime.innerText= moment().add(1, 'second');

    now = actualTime.innerText;
     
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
let julEL =  document.querySelector('#jultid');
let jul = moment('25/12/2019', 'DD/MM/YYYY');
let endofdayEl = document.querySelector('#actualmoment');
//let mom = moment('MMMM Do YYYY, h:mm:ss a');


const updateCountdown = () =>{

nytid = moment().endOf('year').fromNow();

nyTime.innerText = nytid;

julTid = jul.endOf('day').fromNow();

julEL.innerText=julTid;

actual = moment().endOf('day').fromNow();

endofdayEl.innerText=actual;

return nyTime;

}

countdownEl = setInterval(updateCountdown,1000);

