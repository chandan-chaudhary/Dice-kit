//creating first dice with random value 1-6..
var random_num1 = Math.floor(Math.random() * 6) + 1;

// using random images and source concanating them
var random_image1 = "images/dice" + random_num1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", random_image1);

//creating secoinf dice...

var random_num2 = Math.floor(Math.random() * 6) + 1;

var random_image2 = "images/dice" + random_num2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", random_image2);

if (random_num1 > random_num2) {
  document.querySelector("h1").textContent = "palyer 1 win";
} else if (random_num1 < random_num2) {
  document.querySelector("h1").textContent = "player 2 win";
} else {
  document.querySelector("h1").textContent = "draw";
}
