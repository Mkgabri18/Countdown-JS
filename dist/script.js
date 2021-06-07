//base element
const clock = document.getElementById("countdown");

//consts
const second = 1000 * 60;
const minute = second * 60;
const hour = minute * 24;

const dateBlock = document.querySelector(".date-input");
let selectDate = dateBlock.value;

let x;

function sendDate() {
  if(dateBlock.value === "") {
    return;
  }
  // Data selezionata
  selectDate = new Date(dateBlock.value);
  selectDate.setHours(0);
  selectDate.setMinutes(0);
  selectDate.setSeconds(0);
  //Devo resettare il timer precedente
  clearInterval(x);
  //Richiamo funzione countdown ogni secondo
  x = setInterval(CountDown, 1000, selectDate);
}

function CountDown(countDownDate) {
  // Oggi
  const now = new Date();
  // Calcolo differenza
  const differenceDate = new Date(countDownDate).getTime() - now;

  const count = {
    days: Math.floor(differenceDate / hour),
    hours: Math.floor((differenceDate % hour) / minute),
    minutes: Math.floor((differenceDate % minute) / second),
    seconds: Math.floor((differenceDate % second) / 1000)
  };

  document.getElementById("d").innerHTML = JSON.stringify(count.days);
  document.getElementById("h").innerHTML = JSON.stringify(count.hours);
  document.getElementById("m").innerHTML = JSON.stringify(count.minutes);
  document.getElementById("s").innerHTML = JSON.stringify(count.seconds);
}