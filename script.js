/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.

Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input 
in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
da indovinare sono stati individuati.*/


// Richiamo elementi DOM
const countdown = document.getElementById('countdown');
let seconds = 10;
const numRandom = document.getElementById('numeri-random');
const numField = document.getElementById('numbers-field');
const rules = document.getElementById('rules');
const result =document.getElementById('result');
const btn = document.getElementById('btn');
const btnStart = document.getElementById('btn-start');


//Creo il Countdown
countdown.innerHTML = seconds--;

const intervalId = setInterval(function(){

  countdown.innerHTML = seconds;
  if(seconds === 0){
    clearInterval(intervalId);
    countdown.innerHTML = 'Via!';
    rules.innerHTML = 'Inserisci i numeri memorizzati';
    numRandom.classList.add('d-none');
    numField.classList.remove('d-none');
    btn.classList.remove('d-none');
  }
  seconds--;

},500)

//Creo i numeri random
