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


const updateCountdown = () =>{

nytid = moment().endOf('year').fromNow();

nyTime.innerText = nytid;

return nyTime;

}

countdownEl = setInterval(updateCountdown,1000);

