/**
 * Dates and Time.
 *
 */


let clockEl = document.querySelector('#clock');
let hoursEl = document.querySelector('#hour');
let minutesEl = document.querySelector('#minutes');
let secondsEl = document.querySelector('#seconds');
let separatorsEL = document.querySelectorAll('.separator');



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




//Addar eventlistener på button

let studietidEl = document.querySelector('#studietid');

let buttonEl = document.querySelector('#startatimer');
let buttonTwoEl = document.querySelector('#reset');
let nedrakningEl = document.querySelector('#nedrakning');


let tid = studietidEl.value;
let count=moment('00:00:00', 'hh:mm:ss').format();
let timer = moment(count).add(tid, 'hour');
let timerTwo = "";

const updateNedrakning = function() {

timerTwo = moment(timer).subtract(1, 'second');

nedrakningEl.innerText = timerTwo.format('hh:mm:ss');

timer = timerTwo;

};

buttonEl.addEventListener('click', function ups() {

    setInterval(updateNedrakning,1000);
    setTimeout(greeting, 30000);
    setTimeout(greeting_two, 60000);
});

const greeting = function () {alert("You have studied 30 secs, well done!")};

const greeting_two = function () {alert("You are a real champion")};



buttonTwoEl.addEventListener('dblclick', function reset() {

   tid = studietidEl.value;

  timer = moment(count).add(tid, 'hour');    
   
});


// Gör countdwon till nyår / jul

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
}

countdownEl = setInterval(updateCountdown,1000);

