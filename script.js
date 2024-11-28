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
const imputFields = document.querySelectorAll('imput')
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
    rules.innerHTML = 'Inserisci i numeri memorizzati';
    numRandom.classList.add('d-none');
    form.classList.remove('d-none');
  }
  seconds--;

},200)

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



const confirm = e => {
  e.preventDefault();

  const playerNumbers = [];
  for (let i = 0; i < imputFields.length ; i++){
    const field = inputFields[i];
    const value = parseInt(field.value);
  
    if(!isNaN(value) && value>= min && value <= max && !playerNumbers.includes(value)){
      playerNumbers.push(value)
    }
  } 

  if (playerNumbers.length !== totalNumbers){
    countdown.classList.add('text-danger');
    countdown.innerHTML = 'Attenzione! Inserisci 5 numeri diversi';
    return;
  }

  const correctNumbers = [];
  for (let i = 0; i < playerNumbers.length; i++){
    const guess = playerNumbers[i];
    if(randomNumbers.includes(guess)) correctNumbers.push(guess)
  }

  const guessString = correctAswers.join(' - ');

  console.log(guessString)
}

form.addEventListener('submit', confirm)


//bg-danger-subtle border-3 border-danger-subtle
