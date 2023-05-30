window.onload = function() {
  alert("TO START PRESS THE CLICK HERE BUTTON!!!");
};

//MY ARRAYS
let cards = ["♦", "♥", "♠", "♣"];
let cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "J", "Q", "K", "A"];
// GET RAMDON NUMBER WITH ARRAY AS PARAMETER
let getRamdonNumber = arr => {
  let option = Math.floor(Math.random() * arr.length);
  return arr[option];
};
//CREATE RANDOM CARD NUMBER
let ramdonCardNumber = arr => {
  let number = document.querySelector(".number");
  number.innerHTML = getRamdonNumber(arr);
};

//CHNAGE THE CARD CLICKING THE BUTTON AND EVERY 5 SECONDS AUTOMATICALLY UNTIL STOP BUTTON BEEN CLICKED
let changeWithTime = () => {
  let myDivs = document.getElementsByClassName("card-figure");
  myDivs.innerHTML = ramdonCards2(getRamdonNumber(cards));
  ramdonCardNumber(cardNumbers);
};
//
let timeSet;

function startInterval() {
  changeWithTime(); // Cambiar inmediatamente al hacer clic en el botón
  setTimeout(() => {
    timeSet = setInterval(changeWithTime(), 5000); // Cambiar cada 5 segundos después del retraso inicial
  }, 1000);
}
// CREATE DIVS WITH THE CLASES FOR EACH CARD WITH A BUTTON FUNCTION
let divs = document.querySelectorAll(".card-figure");
let myDiv = document.createElement("div");
let newDiv = document.createElement("div");

let ramdonCards2 = card => {
  if (card === "♥" || card === "♦") {
    myDiv.classList = "changeSize heart-card ";
    myDiv.innerHTML = card;
    divs[0].appendChild(myDiv);
  } else {
    myDiv.classList = "changeSize other-cards";
    myDiv.innerHTML = card;
    divs[0].appendChild(myDiv);
  }
  if (card === "♥" || card === "♦") {
    newDiv.classList = "changeSize heart-card-inverted";
    newDiv.innerHTML = card;
    divs[1].appendChild(newDiv);
  } else {
    newDiv.classList = "changeSize other-cards-inverted";
    newDiv.innerHTML = card;
    divs[1].appendChild(newDiv);
  }
};

//INPUT TO CHANGE THE SIZE OF THE CARDS
let changeSize = () => {
  let myDivModi = document.querySelectorAll(".changeSize");
  let changeSizeInput = document.querySelector(".changeSizeInput");
  for (let i = 0; i < myDivModi.length; i++) {
    myDivModi[i].style.fontSize = changeSizeInput.value;
  }
  document.querySelector(".changeSizeInput").value = "";
};
