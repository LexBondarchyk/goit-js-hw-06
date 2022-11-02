


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const body = document.querySelector(".change-color");

body.style.backgroundColor = getRandomHexColor();
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object

