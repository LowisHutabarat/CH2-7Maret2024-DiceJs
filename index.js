// alert("hello")
// Fungsi +1 untuk tidak merandom 0
// Generate Number 1 - 6  For Player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// mengambil image berdasar hasil generate random
var randomDiceImg = "dice" + randomNumber1 + ".png";

// set random img source based on random number
const randomImageSource = `images/${randomDiceImg}`;

//select img berdasar array
let img1 = document.querySelectorAll("img")[0];

// bisa mengganti atribut sebuah objek
img1.setAttribute("src" , randomImageSource);

//Generate number 1 -6 for Player 2

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

const randomImageSource2 = `images/${randomDiceImg2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win , Player 2 Lose"
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win , Player1 Lose"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}
