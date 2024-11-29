/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.

Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input 
in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
da indovinare sono stati individuati.*/


// Richiamo elementi DOM
const countdown = document.getElementById('countdown');
const numRandom = document.getElementById('numeri-random');
const rules = document.getElementById('rules');
const result =document.getElementById('result');
const form = document.getElementById('numbers-field')
const inputFields = document.querySelectorAll('input')
const image= document.getElementById('image');
const winner = document.getElementById('winner')
const message = document.getElementById('message')
let seconds = 10;
const min = 1;
const max = 50;
const totalNumbers = 5;




//Creo il Countdown
countdown.innerHTML = seconds--;

const intervalId = setInterval(function(){

  countdown.innerHTML = seconds;
  if(seconds === 0){
    clearInterval(intervalId);
    countdown.innerHTML = 'Via!';
    rules.innerHTML = 'Inserisci i numeri memorizzati'
    numRandom.classList.add('d-none');
    form.classList.remove('d-none');
    image.innerHTML = `<img src="img/Fox_write_2.JPG" alt="Fox Write" class="img-fluid">`;
  }
  seconds--;

},1000)

//Creo i numeri random

const randomNumbers = [];

while(randomNumbers.length < 5){
  const randomNumber = Math.ceil(Math.random() * 50);
  if(!randomNumbers.includes(randomNumber)){
    randomNumbers.push(randomNumber)
  }
}

numRandom.innerHTML = randomNumbers.join(' - ')


//creo una funzione che mi restituisca un array con i valori inseriti


form.addEventListener ('submit', (e) => {
  e.preventDefault();

  const playerNumbers = [];
  for (let i = 0; i < inputFields.length ; i++){
    const field = inputFields[i];
    const value = parseInt(field.value);
  
    if(!isNaN(value) && value >= min && value <= max && !playerNumbers.includes(value)){
      playerNumbers.push(value)
    }
  } 

  if (playerNumbers.length !== totalNumbers){
    countdown.classList.add('text-danger');
    countdown.innerHTML = 'Attenzione! Inserisci 5 numeri diversi';
    image.innerHTML = `<img src="img/Fox_error_4.JPG" alt="Fox Error" class="img-fluid">`;
    return;
  }
  console.log(playerNumbers)
  
  const correctNumbers = [];
  for (let i = 0; i < playerNumbers.length; i++){
    const guess = playerNumbers[i];
    if(randomNumbers.includes(guess)) correctNumbers.push(guess)
  }

  const guessString = correctNumbers.join(' - ');

  console.log(guessString)

  result.classList.remove('d-none')
  if (correctNumbers.length < 1) {
    image.innerHTML = `<img src="img/Fox_looser_5.JPG" alt="Fox Looser" class="m-1" class="img-fluid">`;
    winner.innerHTML = 'HAI PERSO!';
    message.innerHTML = 'Non hai indovinato nessun numero'
  } else if (correctNumbers.length > 4){
    image.innerHTML = `<img src="img/Fox_perfect_6.JPG" alt="Fox Perfect" class="m-1" class="img-fluid">`;
    winner.innerHTML = 'PERFETTO!';
    message.innerHTML = `Hai indovinato tutti i numeri: ${guessString}`;
  } else {
    image.innerHTML = `<img src="img/Fox_good_3.JPG" alt="Fox Good" class="m-1" class="img-fluid">`;
    winner.innerHTML = 'HAI VINTO!';
    message.innerHTML = `Hai indovinato i seguenti numeri: ${guessString}`;
  }
})


//bg-danger-subtle border-3 border-danger-subtle
