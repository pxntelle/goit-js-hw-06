function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

function onChangeColor() {
  const color = getRandomHexColor();
  textColor.textContent = color;
  body.style.backgroundColor = color;
}
