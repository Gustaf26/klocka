/**
 * Dates and Time.
 *
 */


let clockEl = document.querySelector('#clock');

let actualTime = document.querySelector('#time');

let date = document.querySelector('#date');

date.innerText=moment().format('MMMM DD YYYY');

let now = "";

const updateClockOne = () => {

    actualTime.innerText= moment().format('hh mm ss');

    now = actualTime.innerText;
     
}

const updateClockTwo = () => {

    actualTime.innerText= moment().format('hh:mm:ss');

    now = actualTime.innerText;
     
}


clockEl = setInterval(updateClockOne,500), setInterval(updateClockTwo,1000);



// COUNTDOWN TO NEW YEAR

//Kolla setINterval(t);
// moment().format();

/*definir fecha del 31 a las 23:59:59

funcion countdown con setInterval restando cada segundo

*/

let countdownEl = document.querySelector('#countdown');
let nyTime = document.querySelector('#nytime');
let julEL =  document.querySelector('#jultid');
let endofdayEl = document.querySelector('#actualmoment');


const updateCountdown = () =>{

nytid = moment('31/12/2019', 'DD/MM/YYYY').endOf('DD').fromNow();

nyTime.innerText = nytid;


julTid = moment('25/12/2019', 'DD/MM/YYYY').endOf('DD').fromNow();

julEL.innerText=julTid;

actual = moment().endOf('day').fromNow();

endofdayEl.innerText=actual;

//return nytid, julTid, actual;

}

countdownEl = setInterval(updateCountdown,1000);

