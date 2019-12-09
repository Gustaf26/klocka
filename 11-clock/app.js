/**
 * Dates and Time.
 * 
 * file:///C:/Program%20Files%20(x86)/Ampps/www/javascript/johans%20klocka/11-clock/index.html
 *
 */


let clockEl = document.querySelector('#clock');
let hoursEl = document.querySelector('#hour');
let minutesEl = document.querySelector('#minutes');
let secondsEl = document.querySelector('#seconds');
let separatorsEL = document.querySelectorAll('.separator');
//let separatorsELTwo = document.querySelector('.separatortwo');



let date = document.querySelector('#date');

let now = "";

const updateClockOne = () => {

    hoursEl.innerText=moment().format('hh');
    minutesEl.innerText=moment().format('mm');
    secondsEl.innerText=moment().format('ss');
     
}

const updateSeparators = () => {

    separatorsEL.forEach(function (separator) {

        separator.classList.toggle('hidden');
    })
}


clockEl = setInterval(updateClockOne,1000), setInterval(updateSeparators,1000);



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

/*now = moment().format();
later = moment(2020, 01, 01);
i = Interval.fromDateTimes(now, later);*/


endofdayEl.innerText=actual;
}

countdownEl = setInterval(updateCountdown,1000);

