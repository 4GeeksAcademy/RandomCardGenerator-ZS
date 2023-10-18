/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#iconosup").innerHTML = generadoricono();
  document.querySelector("#icono").innerHTML = document.querySelector(
    "#iconosup"
  ).innerHTML;
  document.querySelector("#valor").innerHTML = generadorvalor();
};

//write your code here

let generadoricono = () => {
  let suits = [
    '<span style="color: #000">♠</span><br />',
    '<span style="color: #f10d0d">♥</span><br />',
    '<span style="color: #f10d0d">♦</span><br />',
    '<span style="color: #000">♣</span><br />'
  ];
  let palo = suits[Math.floor(Math.random() * suits.length)];

  console.log("Hello Rigo from the console!");
  console.log(palo);

  return palo;

  // estoy pensando en poner un objeto que tenga 2 clases : palos y valores y que al recargar la pagina sea un random de cada
};

let generadorvalor = () => {
  let valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let carta = valores[Math.floor(Math.random() * valores.length)];

  return carta;

  // estoy pensando en poner un objeto que tenga 2 clases : palos y valores y que al recargar la pagina sea un random de cada
};
